import "../../public/globals.css";

import Wrapper from "@src/components/wrapper";
import Body from "@src/components/body";

export const metadata = {
	title: "Mini Projects",
	description: "A collection of mini projects",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<head>
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
			</head>
			<Wrapper>
				<Body>{children}</Body>
			</Wrapper>
		</html>
	);
}
