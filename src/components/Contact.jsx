import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function Contact({ title, email, heading, description }) {
  const [copied, setCopied] = useState(false);
  const { t, i18n } = useTranslation();

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="space-y-6 scroll-mt-20 pb-16">
      <h2 className="text-xs font-bold uppercase tracking-widest text-zinc-500">
        {title}
      </h2>
      <div className="space-y-4 max-w-md">
        <h3 className="text-2xl font-medium tracking-tight text-[#f0f0f0]">
          {heading}
        </h3>
        <p className="text-sm text-zinc-300 leading-relaxed">
          {description}
        </p>
        <div className="pt-2 flex items-center gap-3">
          <button
            onClick={handleCopyEmail}
            className="inline-flex items-center justify-center text-sm font-medium h-10 px-4 rounded-lg bg-[#f0f0f0] text-[#111111] hover:bg-zinc-200 transition-colors active:scale-95 duration-150"
          >
            {copied ? t('contact.copied-email') : t('contact.copy-email')}
          </button>
          <a
            href={`mailto:${email}`}
            className="inline-flex items-center justify-center text-sm font-medium h-10 px-4 rounded-lg border border-zinc-700 bg-[#111111] text-[#f0f0f0] hover:bg-zinc-800 transition-colors"
          >
            {t('contact.send-directly')}
          </a>
        </div>
      </div>
    </section>
  );
}