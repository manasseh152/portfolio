import Dev from "@src/components/toast/Dev";
import Main from "@src/components/main";

export default function ToastPage() {
	return (
		<Main>
			<section className="p-2">
				<h2 className="text-5xl font-bold">Toast UI</h2>
				<p className="text-2xl text-gray-400">
					A popup/tooltip context/hook for React.
				</p>
			</section>
			<Dev />
		</Main>
	);
}
