import Icon from "./Icon";

export default function TechStack() {
	return (
		<section className="p-2 max-w-xl w-full">
			<h3 className="text-2xl font-bold">Tech Stack</h3>
			<ol className="flex flex-wrap justify-center gap-4">
				<Icon name="css3" src="/images/dev-icons/css3/css3-original.svg" />
				<Icon
					name="express"
					src="/images/dev-icons/express/express-original.svg"
				/>
				<Icon
					name="flutter"
					src="/images/dev-icons/flutter/flutter-original.svg"
				/>
				<Icon name="git" src="/images/dev-icons/git/git-original.svg" />
				<Icon
					name="github"
					src="/images/dev-icons/github/github-original.svg"
				/>
				<Icon name="html5" src="/images/dev-icons/html5/html5-original.svg" />
				<Icon
					name="javascript"
					src="/images/dev-icons/javascript/javascript-original.svg"
				/>
				<Icon
					name="Microsoft SQL Server"
					src="/images/dev-icons/mssql/mssql-plain.svg"
				/>
				<Icon name="mysql" src="/images/dev-icons/mysql/mysql-original.svg" />
				<Icon name="nextjs" src="/images/dev-icons/nextjs/nextjs-line.svg" />
				<Icon
					name="nodejs"
					src="/images/dev-icons/nodejs/nodejs-original.svg"
				/>
				<Icon name="php" src="/images/dev-icons/php/php-original.svg" />
				<Icon
					name="postgresql"
					src="/images/dev-icons/postgresql/postgresql-original.svg"
				/>
				<Icon name="react" src="/images/dev-icons/react/react-original.svg" />
				<Icon name="sass" src="/images/dev-icons/sass/sass-original.svg" />
				<Icon
					name="tailwindcss"
					src="/images/dev-icons/tailwindcss/tailwindcss-plain.svg"
				/>
				<Icon
					name="typescript"
					src="/images/dev-icons/typescript/typescript-original.svg"
				/>
			</ol>
		</section>
	);
}
