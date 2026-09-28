import React from 'react';
import { useEffect } from 'react';

import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";

const PROJECT_URLS = {
  'osint-console': 'https://osint.davidleon.xyz/',
  'my-wall': 'https://mywall.davidleon.xyz/davidleonstr',
};

const WORK_URLS = {
  'meriyo-tours-dublin': 'https://www.meriyotoursdublin.com/',
};

export default function Home() {
  const { language } = useParams();
  const { t, i18n } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage(language ? language : navigator.language);
  }, [language, i18n]);

  const navLinks = t('nav-links', { returnObjects: true });
  const skillsData = t('skills', { returnObjects: true });
  const projectsData = t('projects.items', { returnObjects: true });
  const worksData = t('works.items', { returnObjects: true });

  const projects = projectsData.map((project) => ({
    ...project,
    url: PROJECT_URLS[project.slug],
  }));

  const works = worksData.map((work) => ({
    ...work,
    url: WORK_URLS[work.slug],
  }));

  return (
    <div className="min-h-screen bg-[#111111] text-[#e0e0e0] selection:bg-[#f0f0f0] selection:text-[#111111] font-sans antialiased" id='home'>

      <Header
        name={t('profile.name')}
        links={navLinks}
      />

      <main className="max-w-3xl mx-auto px-6 py-16 md:py-24 space-y-24">

        <Hero
          great={t('profile.great')}
          name={t('profile.name')}
          role={t('profile.role')}
          bio={t('profile.bio')}
          githubUrl={t('profile.github')}
        />

        <hr className="border-zinc-700" id='apps' />

        <Projects
          id="projects"
          title={t('projects.title')}
          description={t('projects.description')}
          projects={projects}
        />

        <hr className="border-zinc-700" />

        <Projects
          id="works"
          title={t('works.title')}
          description={t('works.description')}
          projects={works}
        />

        <hr className="border-zinc-700" />

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