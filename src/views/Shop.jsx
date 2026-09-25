import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams, Link } from 'react-router-dom';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import Footer from '@/components/Footer';

export default function Shop() {
  const { language } = useParams();
  const { t, i18n } = useTranslation();
  const [copiedIndex, setCopiedIndex] = useState(null);

  useEffect(() => {
    i18n.changeLanguage(language ? language : navigator.language);
  }, [language, i18n]);

  const items = t('shop.items', { returnObjects: true });
  const email = t('profile.email');

  const buildSubject = (item) => t('shop.email-subject', { service: item.name });
  const buildBody = (item) =>
    t('shop.email-body', {
      service: item.name,
      description: item.description,
    });

  const buildMailto = (item) =>
    `mailto:${email}?subject=${encodeURIComponent(
      buildSubject(item)
    )}&body=${encodeURIComponent(buildBody(item))}`;

  const buildGmailWeb = (item) =>
    `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
      email
    )}&su=${encodeURIComponent(buildSubject(item))}&body=${encodeURIComponent(
      buildBody(item)
    )}`;

  const handleCopy = async (item, index) => {
    const text = `${t('shop.copy-to-label')}: ${email}\n${t(
      'shop.copy-subject-label'
    )}: ${buildSubject(item)}\n\n${buildBody(item)}`;
    try {
      await navigator.clipboard.writeText(text);
      setCopiedIndex(index);
      setTimeout(() => setCopiedIndex(null), 2000);
    } catch (err) {
      console.error('Clipboard error:', err);
    }
  };

  return (
    <div className="min-h-screen bg-[#111111] text-[#e0e0e0] selection:bg-[#f0f0f0] selection:text-[#111111] font-sans antialiased flex flex-col">

      <header className="sticky top-0 z-50 backdrop-blur-md bg-[#111111]/80 border-b border-zinc-700/50">
        <div className="max-w-3xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link
            to={`/${i18n.language}`}
            className="font-medium tracking-tight hover:opacity-70 transition-opacity text-[#f0f0f0]"
          >
            {t('profile.name')}.
          </Link>
          <div className="flex items-center gap-4">
            <Link
              to={`/${i18n.language}`}
              className="text-sm text-zinc-400 hover:text-[#f0f0f0] transition-colors"
            >
              {t('shop.back-home')}
            </Link>
            <LanguageSwitcher />
          </div>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-6 py-16 md:py-24 space-y-12 flex-1 w-full">

        <div className="space-y-4">
          <h1 className="text-3xl font-semibold tracking-tight text-[#f0f0f0] sm:text-4xl">
            {t('shop.title')}
          </h1>
          <p className="text-zinc-300 leading-relaxed max-w-xl">
            {t('shop.subtitle')}
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {items.map((item, index) => (
            <div
              key={index}
              className="flex flex-col justify-between rounded-xl border border-zinc-700/60 bg-[#161616] p-6 space-y-4 hover:border-zinc-500 transition-colors"
            >
              <div className="space-y-2">
                <h3 className="text-base font-medium text-[#f0f0f0]">
                  {item.name}
                </h3>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="space-y-3">
                <div className="flex items-baseline justify-between pt-2 border-t border-zinc-800">
                  <span className="text-lg font-semibold text-[#f0f0f0]">
                    {item.price}
                  </span>
                  <span className="text-xs text-zinc-500">
                    {item.note}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <a
                    href={buildGmailWeb(item)}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center text-sm font-medium h-10 px-3 rounded-lg bg-[#f0f0f0] text-[#111111] hover:bg-zinc-200 transition-colors active:scale-95 duration-150"
                  >
                    {t('shop.request-gmail')}
                  </a>
                  <button
                    onClick={() => handleCopy(item, index)}
                    className="inline-flex items-center justify-center text-sm font-medium h-10 px-3 rounded-lg border border-zinc-700 text-[#f0f0f0] hover:bg-zinc-800 transition-colors active:scale-95 duration-150"
                  >
                    {copiedIndex === index
                      ? t('shop.request-copied')
                      : t('shop.request-copy')}
                  </button>
                </div>

                <a
                  href={buildMailto(item)}
                  className="block text-center text-xs text-zinc-500 hover:text-zinc-300 transition-colors"
                >
                  {t('shop.request-default-client')}
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="pt-4 space-y-4 max-w-xl">
          <p className="text-sm text-zinc-400 italic">
            {t('shop.cta')}
          </p>
          <a
            href={`mailto:${email}`}
            className="inline-flex items-center justify-center text-sm font-medium h-10 px-4 rounded-lg bg-[#f0f0f0] text-[#111111] hover:bg-zinc-200 transition-colors active:scale-95 duration-150"
          >
            {t('contact.send-directly')}
          </a>
        </div>

      </main>

      <Footer
        name={t('profile.name')}
        tagline={t('footer.tag-line')}
      />

    </div>
  );
}