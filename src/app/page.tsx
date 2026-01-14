import { SymbolStream } from './components/SymbolStream';

export default function Home() {
	return (
		<div className="flex flex-col justify-between items-center justify-items-center min-h-screen font-[family-name:var(--font-geist-sans)]">
			<SymbolStream />
			<main>
				<div className="w-full">
					<div className="flex flex-col gap-2">
						<h1>
							<span>{`Hello, I'm Yuri. ☕️`}</span>
						</h1>
						<p>
							{`I'm a `}
							<span>Frontend, Mobile and Product Engineer</span>
							{` with 10 years of experience.`}
						</p>
						<p>
							Main technologies include{' '}
							<span>NextJs, React Native and TypeScript</span>.
						</p>
						<p>
							Currently serving as Software Engineer at{' '}
							<a href="https://www.contrary.com/" target="_blank">
								Contrary
							</a>
							.
						</p>
					</div>
					<div></div>
				</div>
			</main>
			<SymbolStream inverted />
			{/* <div className="flex w-full items-center ">TODO</div> */}
			{/* <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center"></footer> */}
		</div>
	);
}
