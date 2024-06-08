import React from 'react';
import { LanguageCard } from '../../components/LanguageCard';

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
    <>
      {languages.map((language) => {
        return (
          <LanguageCard
            name={language.name}
            flag={language.flag}
            description={language.description}
          />
        );
      })}
    </>
  );
};
