import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useParams } from 'react-router-dom';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import Footer from '@/components/Footer';

export default function NotFound() {
  const { language } = useParams();
  const { t, i18n } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage(language ? language : navigator.language);
  }, [language, i18n]);

  const homeHref = `/${i18n.language || 'es'}`;

  return (
    <div className="min-h-screen bg-[#111111] text-[#e0e0e0] selection:bg-[#f0f0f0] selection:text-[#111111] font-sans antialiased flex flex-col">

      <header className="sticky top-0 z-50 backdrop-blur-md bg-[#111111]/80 border-b border-zinc-700/50">
        <div className="max-w-3xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link
            to={homeHref}
            className="font-medium tracking-tight hover:opacity-70 transition-opacity text-[#f0f0f0]"
          >
            {t('profile.name')}.
          </Link>
          <LanguageSwitcher />
        </div>
      </header>

      <main className="flex-1 flex items-center justify-center px-6">
        <div className="max-w-md w-full text-center space-y-6 py-24">
          <p className="font-mono text-sm text-zinc-500 tracking-widest">
            {t('not-found.code')}
          </p>

          <h1 className="text-3xl font-semibold tracking-tight text-[#f0f0f0] sm:text-4xl">
            {t('not-found.title')}
          </h1>

          <p className="text-zinc-400 leading-relaxed">
            {t('not-found.description')}
          </p>

          <div className="pt-4 flex items-center justify-center gap-3">
            <Link
              to={homeHref}
              className="inline-flex items-center justify-center text-sm font-medium h-10 px-4 rounded-lg bg-[#f0f0f0] text-[#111111] hover:bg-zinc-200 transition-colors active:scale-95 duration-150"
            >
              {t('not-found.back-home')}
            </Link>
            <a
              href={`mailto:${t('profile.email')}`}
              className="inline-flex items-center justify-center text-sm font-medium h-10 px-4 rounded-lg border border-zinc-700 text-[#f0f0f0] hover:bg-zinc-800 transition-colors"
            >
              {t('not-found.contact')}
            </a>
          </div>
        </div>
      </main>

      <Footer
        name={t('profile.name')}
        tagline={t('footer.tag-line')}
      />

    </div>
  );
}