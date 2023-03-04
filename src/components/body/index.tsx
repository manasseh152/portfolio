"use client";

import { useMemo } from "react";
import { useViewport } from "@src/hooks/useViewport";
import ToastContainer from "../toast";

interface BodyProps {
	children: React.ReactNode;
}

export default function Body({ children }: BodyProps) {
	const { height } = useViewport();

	const heightStyles = useMemo(() => {
		return {
			height: `calc(${height * 0.01}px * 100)`,
		};
	}, [height]);

	const defaultStyles = {
		display: "grid",
		gridTemplateColumns: "1fr",
		gridTemplateRows: "min-content 1fr",
		gridTemplateAreas: `
			"navbar"
			"main"
		`,
	};

	return (
		<body
			style={{
				...defaultStyles,
				...heightStyles,
			}}
			className=""
		>
			{children}
			<ToastContainer />
		</body>
	);
}
