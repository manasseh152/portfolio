import Image from "next/image";

interface Props {
	name: string;
	src: string;
}

export default function Icon({ name, src }: Props) {
	return (
		<li className="flex flex-col items-center tooltip" data-tip={name}>
			<Image
				src={src}
				alt={name}
				width={64}
				height={64}
				className="rounded-md"
			/>
		</li>
	);
}
