export default function Hero({ name, role, bio, githubUrl }) {
  return (
    <section className="space-y-6 animate-fade-in">
      <div className="space-y-2">
        <h1 className="text-4xl font-semibold tracking-tight text-[#f0f0f0] sm:text-5xl">
          Hola, soy {name}
        </h1>
        <p className="text-lg text-zinc-300 font-medium">
          {role}
        </p>
      </div>
      <p className="text-zinc-300 leading-relaxed max-w-xl text-base">
        {bio}
      </p>
      {githubUrl && (
        <div className="flex gap-4 pt-2">
          <a
            href={githubUrl}
            target="_blank"
            rel="noreferrer"
            className="text-sm font-medium underline underline-offset-4 text-[#e0e0e0] hover:text-zinc-400 transition-colors"
          >
            GitHub
          </a>
        </div>
      )}
    </section>
  );
}