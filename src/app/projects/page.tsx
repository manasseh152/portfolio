import Link from "next/link";
import Image from "next/image";

import Main from "@src/components/main";

export default function ProjectsPage() {
	return (
		<Main>
			<section className="p-2">
				<h2 className="text-5xl font-bold">Projects</h2>
				<p className="text-2xl text-gray-400">A list of my projects</p>
			</section>
			<section className="flex p-2">
				<Link
					href="/projects/toast"
					className="card w-96 bg-base-100 shadow-xl"
				>
					<figure>
						<Image
							src="/images/Toast_Devtools.png"
							alt="Next.js"
							width={400}
							height={400}
						/>
					</figure>
					<div className="card-body">
						<h2 className="card-title">
							Toast UI
							<div className="badge badge-secondary">NEW</div>
						</h2>
						<p>Toast UI is a popup/tooltip contex/hook for React.</p>
						<div className="card-actions justify-end">
							<div className="badge badge-outline">React</div>
							<div className="badge badge-outline">TypeScript</div>
						</div>
					</div>
				</Link>
			</section>
		</Main>
	);
}
