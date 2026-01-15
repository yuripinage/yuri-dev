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
			'Led checkout optimization through A/B experimentation and served as the dedicated mobile engineer, implementing localization tooling and prototypng speech-to-text features.',
	},
	{
		company: 'Index',
		timeAndPlace: 'Fortaleza | 2018 - 2020',
		role: 'Software Engineer | Frontend | Mobile',
		description:
			'Owned frontend and mobile feature delivery across client projects, including real-time delivery tracking experiences and OCR integrations.',
	},
	{
		company: 'Fan Studios',
		timeAndPlace: 'Fortaleza | 2016 - 2028',
		role: 'Game Developer | Frontend Developer',
		description: 'TODO',
	},
	{
		company: 'Trainer Workout',
		timeAndPlace: 'Montreal | 2015',
		role: 'Android Developer Intern',
		description: 'TODO',
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
		<div className="p-2 w-full flex flex-col gap-1 md:gap-2 border-2 border-dashed border-foreground rounded-lg">
			<div className="w-full flex flex-col justify-between md:gap-2 md:items-center md:flex-row">
				<h2>
					<a>{company}</a>
				</h2>
				<p>{timeAndPlace}</p>
			</div>
			<span className="mb-1 md:mb-0">{role}</span>
			<p>{description}</p>
		</div>
	);
}
