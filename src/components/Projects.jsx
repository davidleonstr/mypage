export default function Projects({ title, projects = [], ctaText }) {
  return (
    <section id="projects" className="space-y-10 scroll-mt-20">
      <h2 className="text-xs font-bold uppercase tracking-widest text-zinc-500">
        {title}
      </h2>

      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.url}
            target="_blank"
            rel="noreferrer"
            className="group block rounded-xl border border-zinc-700/60 bg-[#161616] overflow-hidden hover:border-zinc-500 transition-colors"
          >
            <div className="relative h-40 overflow-hidden bg-zinc-900">
              <iframe
                src={project.url}
                title={project.name}
                loading="lazy"
                tabIndex={-1}
                sandbox="allow-scripts allow-same-origin"
                className="w-[200%] h-[200%] origin-top-left scale-50 border-0 pointer-events-none"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/70 via-transparent to-transparent" />
            </div>
            <div className="p-4 space-y-1">
              <h3 className="text-sm font-medium text-[#f0f0f0] group-hover:underline underline-offset-4">
                {project.name}
              </h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                {project.description}
              </p>
            </div>
          </a>
        ))}
      </div>

      <p className="text-sm text-zinc-400 italic pt-2 max-w-xl">
        {ctaText}
      </p>
    </section>
  );
}