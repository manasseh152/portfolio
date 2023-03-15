import { useEffect } from "react";
import { useRouter } from "next/navigation";

interface Props {
	ref: React.RefObject<HTMLElement>;
	callback: (event: MouseEvent) => void;
	ignore?: React.RefObject<HTMLElement>[];
	parrentOnly?: boolean;
}

export function useClickOutside({ ref, callback, ignore, parrentOnly }: Props) {
	const router = useRouter();

	useEffect(() => {
		function handleIgnoreClick(event: MouseEvent) {
			if (ignore) {
				for (const ref of ignore) {
					if (ref.current?.contains(event.target as Node)) {
						return true;
					}
				}
			}

			return false;
		}

		// This function returns false if the click was outside the ref
		// And if parrentOnly is true, it returns false if the click was inside the ref or any of its children
		async function handleParrentClick(event: MouseEvent) {
			if (ref.current?.contains(event.target as Node)) {
				if (parrentOnly) {
					if (ref.current === event.target) {
						return true;
					}

					if (!event.target) return true;

					if (event.target instanceof HTMLAnchorElement) {
						router.push(event.target.href);
						return false;
					}

					return false;
				} else {
					return true;
				}
			}
			return false;
		}

		async function handleClickOutside(event: MouseEvent) {
			if (handleIgnoreClick(event)) return;

			if (await handleParrentClick(event)) return;

			callback(event);
		}

		document.addEventListener("mousedown", handleClickOutside);

		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [ref, callback, ignore, parrentOnly, router]);
}
