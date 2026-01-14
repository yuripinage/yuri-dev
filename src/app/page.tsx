import { GitHubIcon } from './components/GitHubIcon';
import { LinkedinIcon } from './components/LinkedinIcon';
import { SymbolStream } from './components/SymbolStream';

export default function Home() {
	return (
		<div className="flex flex-col justify-between items-center justify-items-center min-h-screen font-[family-name:var(--font-geist-sans)]">
			<SymbolStream />
			<main>
				<div className="w-full md:max-w-[800px] flex flex-col p-4">
					<h1 className="mb-4">
						<span>{`Hello, I'm Yuri. ☕️`}</span>
					</h1>
					<div className="space-y-1">
						<p>
							{`I'm a `}
							<span>Frontend, Mobile and Product Engineer</span>
							{` with 10 years of experience.`}
						</p>
						<p>
							Main technologies include{' '}
							<span>NextJs, React Native and TypeScript</span>.
						</p>
						<p>Finding simple solutions to complex challenges.</p>
					</div>
					<div className="flex gap-4 mt-4">
						<a href="https://github.com/yuripinage" target="_blank">
							<GitHubIcon className="size-5" />
						</a>
						<a
							href="https://www.linkedin.com/in/yuripinage/"
							target="_blank"
						>
							<LinkedinIcon className="size-5" />
						</a>
					</div>
				</div>
			</main>
			<SymbolStream inverted />
		</div>
	);
}
