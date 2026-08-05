import { skills } from "@/data/skills";

export default function Skills() {
  return (
    <section
      id="skills"
      className="max-w-7xl mx-auto py-32"
    >
      <h2 className="text-4xl font-bold text-center">
        Skills
      </h2>

      <div className="flex flex-wrap justify-center gap-4 mt-12">
        {skills.map((skill) => (
          <div
            key={skill}
            className="bg-zinc-900 px-5 py-3 rounded-xl"
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}