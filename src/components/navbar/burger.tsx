"use client";

import { createPortal } from "react-dom";
import { useState, useRef } from "react";
import { useClickOutside } from "@src/hooks/useClickOutside";

interface Props {
	children: React.ReactNode;
}

export function Burger({ children }: Props) {
	const [isOpen, setIsOpen] = useState(false);

	const ref = useRef<HTMLDivElement>(null);
	const buttonRef = useRef<HTMLButtonElement>(null);

	useClickOutside({
		ref,
		callback: () => setIsOpen(false),
		ignore: [buttonRef],
		parrentOnly: true,
	});

	function toggle() {
		setIsOpen(!isOpen);
	}

	return (
		<>
			<button onClick={toggle} ref={buttonRef}>
				=
			</button>
			{isOpen &&
				createPortal(
					<div
						className="absolute inset-0 bottom-16 flex flex-col z-10 bg-base-100"
						ref={ref}
					>
						<button
							onClick={toggle}
							className="absolute top-1 right-1 p-4 btn-ghost btn-circle flex justify-center items-center"
						>
							<span className="font-bold text-2xl">X</span>
						</button>
						{children}
					</div>,
					document.body
				)}
		</>
	);
}
