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

	const positionClass = inverted ? 'bottom-0' : 'top-0';

	return (
		<div
			className={`bg-background group fixed left-0 right-0  w-full h-10 overflow-hidden ${positionClass} ${className}`}
		>
			<div
				className={`flex w-[200%] h-full  motion-safe:animate-marquee ${animationClass}`}
			>
				{/* track A */}
				<div className="flex h-full w-1/2 shrink-0 items-center">
					{symbols.map((_, index) => (
						<Symbol
							key={`a-${index}`}
							reversed={inverted}
							className="h-full w-auto"
						/>
					))}
				</div>

				{/* track B */}
				<div className="flex w-1/2 shrink-0 items-center">
					{symbols.map((_, index) => (
						<Symbol
							key={`b-${index}`}
							reversed={inverted}
							className="h-full w-auto"
						/>
					))}
				</div>
			</div>
		</div>
	);
}
