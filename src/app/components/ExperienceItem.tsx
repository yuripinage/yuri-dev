type ExperienceItemProps = {
	title: string;
	subtitle: string;
	timeAndPlace: string;
	description?: string;
	url?: string;
};

export function ExperienceItem({
	title,
	subtitle,
	timeAndPlace,
	description,
	url,
}: ExperienceItemProps) {
	return (
		<div className="p-2 flex flex-col gap-1 md:gap-2 border-2 border-dashed border-foreground rounded-lg">
			<div className="flex flex-col justify-between md:gap-2 md:items-center md:flex-row">
				<h2>
					{url ? (
						<a href={url} target="_blank">
							{title}
						</a>
					) : (
						title
					)}
				</h2>
				<span className="hidden md:block">{timeAndPlace}</span>
			</div>
			<span>{subtitle}</span>
			<span className="md:hidden md:mt-1">{timeAndPlace}</span>
			<p>{description}</p>
		</div>
	);
}
