import { useNavigate, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const LANGUAGES = [
  { code: 'es', label: 'ES' },
  { code: 'en', label: 'EN' },
  { code: 'ar', label: 'AR' },
];

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();

  const activeIndex = Math.max(
    0,
    LANGUAGES.findIndex((l) => l.code === i18n.language)
  );

  const handleChange = (langCode) => {
    if (langCode === i18n.language) return;

    i18n.changeLanguage(langCode);

    const knownCodes = LANGUAGES.map((l) => l.code);
    const segments = location.pathname.split('/').filter(Boolean);

    if (segments.length > 0 && knownCodes.includes(segments[0])) {
      segments[0] = langCode;
    } else {
      segments.unshift(langCode);
    }

    navigate(`/${segments.join('/')}`);
  };

  return (
    <div
      role="tablist"
      aria-label="Language"
      className="relative inline-flex items-center rounded-full border border-zinc-700 bg-[#181818] p-1 select-none"
    >
      <div
        aria-hidden="true"
        className="absolute top-1 bottom-1 left-1 rounded-full bg-[#f0f0f0] transition-transform duration-300 ease-out"
        style={{
          width: `calc(${100 / LANGUAGES.length}% - 4px)`,
          transform: `translateX(${activeIndex * 100}%)`,
        }}
      />
      {LANGUAGES.map((lang) => (
        <button
          key={lang.code}
          type="button"
          role="tab"
          aria-selected={i18n.language === lang.code}
          onClick={() => handleChange(lang.code)}
          className={`relative z-10 w-9 py-1 text-xs font-medium rounded-full transition-colors duration-300 ${
            i18n.language === lang.code
              ? 'text-[#111111]'
              : 'text-zinc-400 hover:text-zinc-200'
          }`}
        >
          {lang.label}
        </button>
      ))}
    </div>
  );
}