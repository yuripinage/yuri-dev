import { Symbol } from './Symbol';

const SYMBOL_COUNT = 30;

export function SymbolStream({
	className,
	inverted,
}: {
	className?: string;
	inverted?: boolean;
}) {
	const symbols = Array.from({ length: SYMBOL_COUNT });
	const animationClass = inverted
		? 'animate-[marquee_60s_linear_infinite_reverse]'
		: 'animate-[marquee_60s_linear_infinite]';

	return (
		<div className={`group w-full h-10 overflow-hidden ${className}`}>
			<div
				className={`flex w-[200%] h-full ${animationClass} motion-safe:animate-marquee`}
			>
				{/* track A */}
				<div className="flex h-full w-1/2 shrink-0 items-center gap-0 text-background">
					{symbols.map((_, index) => (
						<Symbol
							key={`a-${index}`}
							reversed={inverted}
							className="h-full w-auto fill-[#46006B]"
						/>
					))}
				</div>

				{/* track B */}
				<div className="flex w-1/2 shrink-0 items-center gap-0">
					{symbols.map((_, index) => (
						<Symbol
							key={`b-${index}`}
							reversed={inverted}
							className="h-full w-auto fill-[#46006B]"
						/>
					))}
				</div>
			</div>
		</div>
	);
}
