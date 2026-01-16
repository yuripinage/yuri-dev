import { ExperienceItem } from './ExperienceItem';

const EDUCATION = [
	{
		title: 'Bachelor in Digital Media and Systems',
		subtitle: 'Federal University of Ceará (Brazil)',
		timeAndPlace: 'Fortaleza | 2013 - 2017',
	},
	{
		title: 'Visiting Student Scolarship in Computer Science',
		subtitle: 'Concordia University (Canada)',
		timeAndPlace: 'Montreal | 2015',
	},
];

export function Education() {
	return (
		<section className="flex flex-col gap-4">
			<h1>Education</h1>
			{EDUCATION.map((edu, index) => (
				<ExperienceItem
					key={`edu-${index}`}
					title={edu.title}
					subtitle={edu.subtitle}
					timeAndPlace={edu.timeAndPlace}
				/>
			))}
		</section>
	);
}
