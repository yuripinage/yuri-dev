export function Education() {
	return (
		<section className="flex flex-col gap-4">
			<h1>Education</h1>
			<div className="p-2 w-full flex flex-col gap-1 md:gap-2 border-2 border-dashed border-foreground rounded-lg">
				<div className="flex flex-col">
					<div className="w-full flex flex-col justify-between md:gap-2 md:items-center md:flex-row">
						<h2>Bachelor in Digital Media and Systems</h2>
						<span className="hidden md:flex">
							Fortaleza | 2013 - 2017
						</span>
					</div>
					<div className="flex flex-col gap-1">
						<span className="md:hidden">
							Fortaleza | 2013 - 2017
						</span>
						<span>Federal University of Ceará (Brazil)</span>
					</div>
				</div>
				<div className="flex flex-col">
					<div className="w-full flex flex-col justify-between md:gap-2 md:items-center md:flex-row">
						<h2>Visiting Student Scolarship in Computer Science</h2>
						<span className="hidden md:flex">Montreal | 2015</span>
					</div>
					<div className="flex flex-col gap-1">
						<span className="md:hidden">Montreal | 2015</span>
						<span>Concordia University (Canada)</span>
					</div>
				</div>
			</div>
		</section>
	);
}
