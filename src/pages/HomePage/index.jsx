import { Article } from '../../components/Article';
import { ExerciseOne } from '../../components/ExerciseOne';
import { Expression } from '../../components/Expression';
import English from '../../eng.mdx';
import React from 'react';
import { LanguageCard } from '../../components/LanguageCard';
import { Anglictina } from '../../components/Anglictina';
import { ExerciseTwo } from '../../components/ExerciseTwo';
import { Exercise } from '../../components/Exercise';

const components = {
  $$term: Expression,
  $$option: ExerciseOne,
  $$input: ExerciseTwo,
  $$exercise: Exercise,
};

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
      <English components={components} />
      <Article />
      <ExerciseOne />
      <ExerciseTwo />
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
