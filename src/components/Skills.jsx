export default function Skills({ skillGroups = [] }) {
  return (
    <section id="skills" className="space-y-10 scroll-mt-20">
      <h2 className="text-xs font-bold uppercase tracking-widest text-zinc-500">
        Habilidades y Tecnologías
      </h2>
      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
        {skillGroups.map((skillGroup, index) => (
          <div key={index} className="space-y-3">
            <h3 className="text-sm font-medium text-[#f0f0f0]">{skillGroup.category}</h3>
            <ul className="space-y-2 text-sm text-zinc-300">
              {skillGroup.items.map((item, iIdx) => (
                <li key={iIdx} className="flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-zinc-500" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}