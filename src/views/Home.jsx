import React from 'react';
import { PROFILE, PROJECTS, SKILLS } from '@/data/data';

import {
  Header,
  Hero,
  Projects,
  Skills,
  Contact,
  Footer
} from '@/components';

const NAVLINKS = [
  { href: '#projects', label: 'Proyectos' },
  { href: '#skills',   label: 'Habilidades' },
  { href: '#contact',  label: 'Contacto' },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#111111] text-[#e0e0e0] selection:bg-[#f0f0f0] selection:text-[#111111] font-sans antialiased">

      <Header
        name={PROFILE.name}
        links={NAVLINKS}
      />

      <main className="max-w-3xl mx-auto px-6 py-16 md:py-24 space-y-24">

        <Hero
          name={PROFILE.name}
          role={PROFILE.role}
          bio={PROFILE.bio}
          githubUrl={PROFILE.github}
        />

        <hr className="border-zinc-700" />

        <Projects projects={PROJECTS} />

        <hr className="border-zinc-700" />

        <Skills skillGroups={SKILLS} />

        <hr className="border-zinc-700" />

        <Contact
          email={PROFILE.email}
          heading="¿Tienes un proyecto en mente o alguna consulta?"
          description="Siempre estoy abierto a discutir nuevas ideas, colaborar en proyectos de código abierto o proyectos privados, o simplemente charlar sobre desarrollo de software."
        />

      </main>

      <Footer
        name={PROFILE.name}
        tagline="Menos es más."
      />

    </div>
  );
}