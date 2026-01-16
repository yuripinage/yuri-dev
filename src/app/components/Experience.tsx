import { ExperienceItem } from './ExperienceItem';

const EXPERIENCES = [
	{
		company: 'Contrary',
		timeAndPlace: 'Porto (Remote) | 2024 - Present',
		role: 'Senior Software Engineer | Full-stack',
		description:
			'Owning the full development lifecycle across frontend, backend and infrastructure in multiple projects, including a wealth and portfolio management platform and various other internal tools.',
		url: 'https://contrary.com/',
	},
	{
		company: 'Kyte',
		timeAndPlace: 'Porto (Remote) | 2021 - 2024',
		role: 'Senior Software Engineer | Frontend | Mobile',
		description:
			'Led frontend and mobile development for high-impact booking flows, improving checkout conversion and shipping key trip-management features for a delivery-first car rental product.',
		url: 'https://www.linkedin.com/company/drivekyte/',
	},
	{
		company: 'Barkyn',
		timeAndPlace: 'Porto | 2020 - 2021',
		role: 'Software Engineer | Frontend | Mobile',
		description:
			'Led checkout optimization through A/B experimentation and served as the dedicated mobile engineer, implementing localization tooling and prototypng speech-to-text features.',
		url: 'https://barkyn.com/',
	},
	{
		company: 'Index',
		timeAndPlace: 'Fortaleza | 2018 - 2020',
		role: 'Software Engineer | Frontend | Mobile',
		description:
			'Owned frontend and mobile feature delivery across client projects, including real-time delivery tracking experiences and OCR integrations.',
		url: 'https://idx.digital/',
	},
	{
		company: 'Fan Studios',
		timeAndPlace: 'Fortaleza | 2016 - 2028',
		role: 'Game Developer | Frontend Developer',
		description:
			'Indie mobile game development with Unity 3D and frontend for different clients.',
	},
	{
		company: 'Trainer Workout',
		timeAndPlace: 'Montreal | 2015',
		role: 'Android Developer Intern',
		description: `Contributed to the development of mobile features for the startup's native Android app.`,
	},
];

export function Experience() {
	return (
		<section className="flex flex-col gap-4">
			<h1>Experience</h1>
			{EXPERIENCES.map((exp, index) => (
				<ExperienceItem
					key={`exp-${index}`}
					title={exp.company}
					subtitle={exp.role}
					timeAndPlace={exp.timeAndPlace}
					description={exp.description}
					url={exp.url}
				/>
			))}
		</section>
	);
}
