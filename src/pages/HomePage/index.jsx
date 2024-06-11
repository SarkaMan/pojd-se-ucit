import React from 'react';
import { LanguageCard } from '../../components/LanguageCard';
import About from '../About.mdx';
import { createComponents } from '../../lib/mdx';

const languages = [
  {
    name: 'Angličtina',
    flag: 'obrazky/Aj.png',
    description:
      'Angličtina je považována za třetí nejšťastnější jazyk na světě.',
  },
  {
    name: 'Španělština',
    flag: 'obrazky/Sj.png',
    description: 'Španělština je druhý nejpoužívanější jazyk.',
  },
  {
    name: 'Portugalština',
    flag: 'obrazky/Ptg.png',
    description:
      'Portugalština je jediným oficiálním jazykem v šesti různých zemích na třech kontinentech.',
  },
];



export const HomePage = () => {
  return (
    <div className="">
      <About components={createComponents()} />
      <div className='flex  gap-5'>
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
