import { AnimateElement } from './AnimateComponent';

export default function Projects({ projects = [] }) {
  return (
    <section id="projects" className="space-y-10 scroll-mt-20">
      <div className="grid gap-8 sm:grid-cols-1">
        {projects.map((project, index) => (
          <AnimateElement key={index}>
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="group block p-6 -mx-6 hover:bg-zinc-800/60 transition-all duration-300 space-y-3"
            >
              <div className="flex items-center justify-between">
                <h3 className="font-medium text-[#f0f0f0] group-hover:text-white text-lg flex items-center gap-1">
                  {project.title}
                </h3>
              </div>
              <p className="text-sm text-zinc-300 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 pt-1">
                {project.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="text-xs px-2.5 py-1 rounded-full bg-zinc-700/50 text-zinc-300 font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </a>
          </AnimateElement>
        ))}
      </div>
    </section>
  );
}