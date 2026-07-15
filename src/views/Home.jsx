import React from 'react';
import { useEffect } from 'react';

import { Info } from 'lucide-react';

import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";

export default function Home() {
  const { language } = useParams();
  const { t, i18n } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage(language ? language : navigator.language);
  }, [language, i18n]);

  const navLinks = t('nav-links', { returnObjects: true });
  const skillsData = t('skills', { returnObjects: true });

  return (
    <div className="min-h-screen bg-[#111111] text-[#e0e0e0] selection:bg-[#f0f0f0] selection:text-[#111111] font-sans antialiased" id='home'>

      <Header
        name={t('profile.name')}
        links={navLinks}
      />

      <main className="max-w-3xl mx-auto px-6 py-16 md:py-24 space-y-24">


        <div className="md:hidden flex items-center space-x-5 text-[#313131]">
          <Info className="w-9 h-9 shrink-0" />
          <p>{t('mobile-message')}</p>
        </div>

        <Hero
          great={t('profile.great')}
          name={t('profile.name')}
          role={t('profile.role')}
          bio={t('profile.bio')}
          githubUrl={t('profile.github')}
        />

        <hr className="border-zinc-700" id='apps' />

        <Skills title={t('skills-title')} skillGroups={skillsData} />

        <hr className="border-zinc-700" />

        <Contact
          email={t('profile.email')}
          heading={t('contact.heading')}
          description={t('contact.description')}
        />

      </main>

      <Footer
        name={t('profile.name')}
        tagline={t('footer.tag-line')}
      />

    </div>
  );
}