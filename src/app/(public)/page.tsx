import Main from "@src/components/main";
import TechStack from "@src/components/techstack";

export default function Home() {
	return (
		<Main>
			<section className="p-2 max-w-xl">
				<h1 className="text-6xl font-bold">Projects</h1>
				<p className="text-2xl text-gray-400">A list of my projects</p>
			</section>
			<TechStack />
		</Main>
	);
}
