import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { buildGmailUrl } from '@/utils/gmail';

export default function CtaBanner({ email }) {
  const { t, i18n } = useTranslation();

  const gmailUrl = buildGmailUrl({
    to: email,
    subject: t('cta-banner.email-subject'),
    body: t('cta-banner.email-body'),
  });

  return (
    <section
      id="cta"
      className="rounded-xl border border-zinc-700/60 bg-[#161616] p-8 space-y-5 text-center"
    >
      <h2 className="text-2xl font-medium tracking-tight text-[#f0f0f0]">
        {t('cta-banner.title')}
      </h2>
      <p className="text-sm text-zinc-400 leading-relaxed max-w-md mx-auto">
        {t('cta-banner.description')}
      </p>
      <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
        <a
          href={gmailUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center text-sm font-medium h-10 px-5 rounded-lg bg-[#f0f0f0] text-[#111111] hover:bg-zinc-200 transition-colors active:scale-95 duration-150"
        >
          {t('cta-banner.button')}
        </a>
        <Link
          to={`/${i18n.language}/shop`}
          className="inline-flex items-center justify-center text-sm font-medium h-10 px-5 rounded-lg border border-zinc-700 text-[#f0f0f0] hover:bg-zinc-800 transition-colors"
        >
          {t('cta-banner.shop')}
        </Link>
      </div>
    </section>
  );
}