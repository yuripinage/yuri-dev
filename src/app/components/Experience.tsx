type ExperienceItemProps = {
	company: string;
	role: string;
	description: string;
	timeAndPlace: string;
};

const EXPERIENCES = [
	{
		company: 'Contrary',
		timeAndPlace: 'Porto (Remote) | 2024 - Present',
		role: 'Senior Software Engineer | Full-stack',
		description:
			'Owning the full development lifecycle across frontend, backend and infrastructure in multiple projects, including a wealth and portfolio management platform and various other internal tools.',
	},
	{
		company: 'Kyte',
		timeAndPlace: 'Porto (Remote) | 2021 - 2024',
		role: 'Senior Software Engineer | Frontend | Mobile',
		description:
			'Led frontend and mobile development for high-impact booking flows, improving checkout conversion and shipping key trip-management features for a delivery-first car rental product.',
	},
	{
		company: 'Barkyn',
		timeAndPlace: 'Porto | 2020 - 2021',
		role: 'Software Engineer | Frontend | Mobile',
		description:
			'Drove web checkout optimization through experimentation and A/B testing and served as the dedicated mobile engineer, implementing localization tooling and prototypng speech-to-text-features.',
	},
	{
		company: 'Index',
		timeAndPlace: 'Fortaleza | 2018 - 2020',
		role: 'Software Engineer | Frontend | Mobile',
		description:
			'Owned frontend and mobile feature delivery across client projects, including real-time delivery tracking experiences and OCR integrations.',
	},
];

export default function Experience() {
	return (
		<section className="flex flex-col gap-4">
			<h1>Experience</h1>
			{EXPERIENCES.map((exp, index) => (
				<ExperienceItem
					key={`exp-${index}`}
					company={exp.company}
					role={exp.role}
					description={exp.description}
					timeAndPlace={exp.timeAndPlace}
				/>
			))}
		</section>
	);
}

function ExperienceItem({
	company,
	role,
	description,
	timeAndPlace,
}: ExperienceItemProps) {
	return (
		<div className="p-2 w-full flex flex-col gap-2 border-2 border-dashed border-foreground rounded-lg">
			<div className="w-full flex justify-between items-center">
				<h2>{company}</h2>
				<p>{timeAndPlace}</p>
			</div>
			<span>{role}</span>
			{description}
		</div>
	);
}
