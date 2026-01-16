import { Experience } from './components/Experience';
import { Overview } from './components/Overview';
import { Education } from './components/Education';
import { SymbolStream } from './components/SymbolStream';

export default function Home() {
	return (
		<div className="flex flex-col justify-between items-center justify-items-center min-h-screen font-[family-name:var(--font-geist-sans)]">
			<SymbolStream />
			<main>
				<div className="w-full py-16 md:max-w-[800px] gap-8 flex flex-col p-4">
					<Overview />
					<Experience />
					<Education />
				</div>
			</main>
			<SymbolStream inverted />
		</div>
	);
}
