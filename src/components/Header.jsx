export default function Header({ name, links = [] }) {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-[#111111]/80 border-b border-zinc-700/50">
      <div className="max-w-3xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="font-medium tracking-tight hover:opacity-70 transition-opacity text-[#f0f0f0]">
          {name}.
        </a>
        <nav className="flex gap-6 text-sm text-zinc-400">
          {links.map((link, index) => (
            <a key={index} href={link.href} className="hover:text-[#f0f0f0] transition-colors">
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}