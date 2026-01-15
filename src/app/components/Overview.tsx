import { GitHubIcon } from './GitHubIcon';
import { LinkedinIcon } from './LinkedinIcon';

export default function Overview() {
	return (
		<section>
			<h1 className="mb-4">{`Hello, I'm Yuri. ☕️`}</h1>
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
		</section>
	);
}
