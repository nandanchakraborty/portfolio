import { projects } from "@/data/projects";

export default function Projects() {
	return (
		<section id="projects" className="max-w-7xl mx-auto py-32">
			<h2 className="text-4xl font-bold text-center">Projects</h2>

			<div className="grid md:grid-cols-2 gap-8 mt-12">
				{projects.map((project) => (
					<div
						key={project.title}
						className="border border-zinc-800 p-6 rounded-2xl"
					>
						<h3 className="text-2xl font-bold">{project.title}</h3>

						<p className="text-gray-400 mt-4">
							{project.description}
						</p>

						<div className="flex flex-wrap gap-2 mt-6">
							{project.tech.map((item) => (
								<span
									key={item}
									className="bg-zinc-900 px-3 py-1 rounded-md"
								>
									{item}
								</span>
							))}
						</div>

						{project.githubUrl ? (
							<a
								href={project.githubUrl}
								target="_blank"
								rel="noreferrer"
								className="inline-block mt-6 text-cyan-400 hover:text-cyan-300"
							>
								View on GitHub
							</a>
						) : null}
					</div>
				))}
			</div>
		</section>
	);
}
