import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';

export default function Header({ name, links = [] }) {
  const [open, setOpen] = useState(false);
  const { i18n } = useTranslation();

  const buildHref = (href) =>
    href.startsWith('#') ? href : `/${i18n.language}${href}`;

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-[#111111]/80 border-b border-zinc-700/50">
      <div className="max-w-3xl mx-auto px-6 h-16 flex items-center justify-between">
        <a
          href="#"
          className="font-medium tracking-tight hover:opacity-70 transition-opacity text-[#f0f0f0]"
        >
          {name}.
        </a>

        <nav className="hidden md:flex items-center gap-6 text-sm text-zinc-400">
          {links.map((link, index) => (
            <a
              key={index}
              href={buildHref(link.href)}
              className="hover:text-[#f0f0f0] transition-colors"
            >
              {link.label}
            </a>
          ))}
          <LanguageSwitcher />
        </nav>

        <div className="flex items-center gap-3 md:hidden">
          <LanguageSwitcher />
          <button
            onClick={() => setOpen(!open)}
            className="text-zinc-300 hover:text-white"
          >
            {open && <X size={22} />}
            {!open && <Menu size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="md:hidden border-t border-zinc-700/50">
          <div className="flex flex-col p-4">
            {links.map((link, index) => (
              <a
                key={index}
                href={buildHref(link.href)}
                onClick={() => setOpen(false)}
                className="py-3 text-zinc-400 hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}