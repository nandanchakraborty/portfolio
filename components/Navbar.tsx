export default function Navbar() {
	return (
		<nav className="fixed top-0 w-full border-b border-white/10 bg-slate-950/70 backdrop-blur-xl z-50">
			<div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
				<h1 className="text-xl font-semibold tracking-tight text-white">
					Nandan Chakraborty
				</h1>

				<div className="hidden md:flex items-center gap-8 text-slate-200">
					<a href="#about" className="transition hover:text-cyan-300">
						About
					</a>
					<a
						href="#skills"
						className="transition hover:text-cyan-300"
					>
						Skills
					</a>
					<a
						href="#projects"
						className="transition hover:text-cyan-300"
					>
						Projects
					</a>
					<a
						href="#contact"
						className="transition hover:text-cyan-300"
					>
						Contact
					</a>
				</div>
			</div>
		</nav>
	);
}
