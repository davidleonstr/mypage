export default function Footer({ name, tagline = 'Menos es más.' }) {
  return (
    <footer className="border-t border-zinc-700/60 bg-zinc-900">
      <div className="max-w-3xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
        <p>© {new Date().getFullYear()} {name}.</p>
        <p className="font-mono text-[10px]">{tagline}</p>
      </div>
    </footer>
  );
}