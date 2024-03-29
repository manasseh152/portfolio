interface MainProps {
	children: React.ReactNode;
}

export default function Main({ children }: MainProps) {
	return (
		<main
			style={{
				gridArea: "main",
			}}
			className="overflow-auto"
		>
			{children}
		</main>
	);
}
