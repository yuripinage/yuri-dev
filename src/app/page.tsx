import { SymbolStream } from './components/SymbolStream';

export default function Home() {
	return (
		<div className="flex flex-col justify-between items-center justify-items-center min-h-screen font-[family-name:var(--font-geist-sans)]">
			<SymbolStream />
			<main>
				<div className="w-full">
					<div className="flex flex-col gap-2">
						<h1>{`Hello, I'm Yuri. ☕️`}</h1>
						<p>
							I&apos;m a{' '}
							<span className="font-[w95fa] tracking-widest font-bold leading-tight">
								Frontend, Mobile and Product Engineer
							</span>{' '}
							with 10 years of experience.
						</p>
						<p>
							Main technologies include NextJS, React Native and
							Typescript.
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
