import "../../public/globals.css";

import Wrapper from "@src/components/wrapper";
import Body from "@src/components/body";
import Navbar from "@src/components/navbar";

export const metadata = {
	title: "Mini Projects",
	description: "A collection of mini projects",
	manifest: "/manifest.json",
	viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<Wrapper>
				<Body>
					<Navbar />
					{children}
				</Body>
			</Wrapper>
		</html>
	);
}
