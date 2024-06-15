import React from 'react';
import { LanguageCard } from '../../components/LanguageCard';
import About from '../About.mdx';
import { createComponents } from '../../lib/mdx';

const languages = [
  {
    name: 'Angličtina',
    flag: 'obrazky/aj.png',
    description:
      'Angličtina je považována za třetí nejšťastnější jazyk na světě.',
  },
  {
    name: 'Španělština',
    flag: 'obrazky/sj.png',
    description: 'Španělština je druhý nejpoužívanější jazyk.',
  },
  {
    name: 'Portugalština',
    flag: 'obrazky/ptg.png',
    description:
      'Portugalština je jediným oficiálním jazykem v šesti různých zemích na třech kontinentech.',
  },
];



export const HomePage = () => {
  return (
    <div className="container mx-auto w-full max-w-5xl bg-gray-50 shadow-2xl px-4 sm:px-6 md:px-10 overflow-x-auto mt-5 mb-10">
      <About components={createComponents()} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-5">
        {languages.map((language) => {
          return (
            <LanguageCard 
              name={language.name} 
              flag={language.flag}
              description={language.description}
              key={language.name}
            />
          );
        })}
      </div>
      <div className="w-full sm:w-1/2 px-2 rounded-lg overflow-hidden bg-white shadow-lg mt-10"/>
      <div className="mt-10"/>
    </div>
  );
};
