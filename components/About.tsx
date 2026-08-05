export default function About() {
  return (
    <section id="about" className="max-w-7xl mx-auto py-32">
      <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm font-semibold">About Me</p>
          <h2 className="mt-6 text-4xl font-bold tracking-tight text-white">Build backend systems that scale and perform.</h2>
        </div>

        <div className="max-w-2xl text-lg leading-8 text-slate-300">
          I am a Computer Science graduate with a strong passion for backend engineering. I build APIs, optimize database workflows, implement secure authentication, and deploy reliable services using Node.js, Express, Prisma, PostgreSQL, Redis, and Docker.
        </div>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        <div className="rounded-[2rem] border border-slate-800/80 bg-slate-950/85 p-8 shadow-[0_20px_40px_-24px_rgba(0,0,0,0.5)] transition hover:-translate-y-1">
          <h3 className="text-xl font-semibold text-white">API Architecture</h3>
          <p className="mt-3 text-slate-400 leading-7">Designing efficient, versioned APIs with clean request/response flows and strong security controls.</p>
        </div>
        <div className="rounded-[2rem] border border-slate-800/80 bg-slate-950/85 p-8 shadow-[0_20px_40px_-24px_rgba(0,0,0,0.5)] transition hover:-translate-y-1">
          <h3 className="text-xl font-semibold text-white">Data Reliability</h3>
          <p className="mt-3 text-slate-400 leading-7">Building database-driven services with performance tuning, caching, and resilient data flows.</p>
        </div>
        <div className="rounded-[2rem] border border-slate-800/80 bg-slate-950/85 p-8 shadow-[0_20px_40px_-24px_rgba(0,0,0,0.5)] transition hover:-translate-y-1">
          <h3 className="text-xl font-semibold text-white">Cloud-ready</h3>
          <p className="mt-3 text-slate-400 leading-7">Deploying containerized backend systems with monitoring, logging, and reliable CI/CD pipelines.</p>
        </div>
      </div>
    </section>
  );
}
