"use client";

export default function Hero() {
	return (
		<section className="min-h-screen flex items-center overflow-hidden relative">
			<div className="absolute inset-0 pointer-events-none overflow-hidden">
				<div className="absolute -left-16 top-24 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl" />
				<div className="absolute right-0 top-1/3 h-72 w-72 rounded-full bg-fuchsia-500/20 blur-3xl" />
			</div>

			<div className="relative max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8 grid gap-16 lg:grid-cols-[1.2fr_0.8fr] items-center">
				<div className="space-y-8">
					<span className="inline-flex rounded-full bg-cyan-500/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300">
						Backend Engineer
					</span>

					<div>
						<h1 className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-sky-400 to-fuchsia-400">
							Nandan Chakraborty
						</h1>
						<p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
							I build fast, scalable backend systems with Node.js,
							Prisma, PostgreSQL, Redis and Docker. My work
							focuses on APIs, authentication, payments, and
							resilient infrastructure.
						</p>
					</div>

					<div className="flex flex-wrap gap-4">
						<a
							href="#projects"
							className="inline-flex items-center justify-center rounded-full bg-cyan-400 px-8 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/20 transition hover:-translate-y-0.5"
						>
							View Projects
						</a>
						<a
							href="#contact"
							className="inline-flex items-center justify-center rounded-full border border-slate-700 px-8 py-3 text-sm text-slate-100 transition hover:border-cyan-400 hover:text-cyan-300"
						>
							Contact Me
						</a>
					</div>
				</div>

				<div className="relative rounded-[2rem] border border-cyan-400/10 bg-white/5 p-8 shadow-[0_40px_120px_-40px_rgba(56,189,248,0.35)] backdrop-blur-xl">
					<div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-cyan-500/10 via-transparent to-fuchsia-500/10" />
					<div className="relative space-y-6">
						<div className="rounded-3xl border border-slate-800/80 bg-slate-950/80 p-6 shadow-[0_20px_40px_-20px_rgba(0,0,0,0.5)]">
							<p className="text-sm uppercase tracking-[0.35em] text-slate-400">
								Featured Skill
							</p>
							<h2 className="mt-4 text-3xl font-semibold text-white">
								Scalable APIs
							</h2>
							<p className="mt-3 text-slate-300 leading-7">
								Building clean REST and GraphQL services with
								robust authentication, database tuning, and
								cloud-ready architecture.
							</p>
						</div>

						<div className="grid gap-4 sm:grid-cols-2">
							<div className="rounded-3xl border border-slate-800/80 bg-slate-950/80 p-5 text-center">
								<p className="text-3xl font-bold text-cyan-300">
									4
								</p>
								<p className="mt-2 text-sm text-slate-400">
									Projects
								</p>
							</div>
							<div className="rounded-3xl border border-slate-800/80 bg-slate-950/80 p-5 text-center">
								<p className="text-3xl font-bold text-fuchsia-300">
									API
								</p>
								<p className="mt-2 text-sm text-slate-400">
									Focus
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
