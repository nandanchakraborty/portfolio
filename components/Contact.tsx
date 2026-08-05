export default function Contact() {
	return (
		<section id="contact" className="max-w-7xl mx-auto py-32">
			<div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
				<div>
					<p className="text-cyan-400 uppercase tracking-[0.35em] text-sm font-semibold">
						Contact
					</p>
					<h2 className="mt-6 text-4xl font-bold tracking-tight text-white">
						Lets build something remarkable.
					</h2>
					<p className="mt-6 max-w-xl text-slate-300 leading-8">
						Want to collaborate on a backend system, API, or
						infrastructure project? Send a message and I’ll get back
						to you quickly.
					</p>
				</div>

				<div className="space-y-4 rounded-[2rem] border border-slate-800/90 bg-slate-950/80 p-8 shadow-[0_40px_120px_-60px_rgba(0,0,0,0.7)]">
					<div>
						<p className="text-sm uppercase tracking-[0.35em] text-slate-400">
							Email
						</p>
						<a
							href="mailto:nandanchakraborty90@gmail.com"
							className="mt-2 block text-lg font-semibold text-cyan-300 hover:text-cyan-200"
						>
							nandanchakraborty90@gmail.com
						</a>
					</div>

					<div>
						<p className="text-sm uppercase tracking-[0.35em] text-slate-400">
							GitHub
						</p>
						<a
							href="https://github.com/nandanchakraborty"
							target="_blank"
							rel="noreferrer"
							className="mt-2 block text-lg font-semibold text-cyan-300 hover:text-cyan-200"
						>
							github.com/nandanchakraborty
						</a>
					</div>

					<div>
						<p className="text-sm uppercase tracking-[0.35em] text-slate-400">
							LinkedIn
						</p>
						<a
							href="https://www.linkedin.com/in/nandan-chakraborty-7aa61533b/"
							target="_blank"
							rel="noreferrer"
							className="mt-2 block text-lg font-semibold text-cyan-300 hover:text-cyan-200"
						>
							linkedin.com/in/nandan-chakraborty-7aa61533b
						</a>
					</div>
				</div>
			</div>
		</section>
	);
}
