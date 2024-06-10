import { ExerciseOne } from '../components/ExerciseOne';
import { ExerciseTwo } from '../components/ExerciseTwo';
import { Exercise } from '../components/Exercise';
import { Expression } from '../components/Expression';
import { ExerciseThree } from '../components/ExerciseThree';
import { ExerciseFour } from '../components/ExerciseFour';
import { ExerciseFive } from '../components/ExerciseFive';

export const createComponents = () => ({
  h1: ({ children }) => (
    <h1 className="font-bold text-2xl text-green-700 mt-10 mx-5 mb-5">
      {children}
    </h1>
  ),
  h2: ({ children }) => (
    <h2 className="font-bold text-2xl mt-10 mx-5 mb-5">{children}</h2>
  ),
  p: ({ children }) => (
    <p className="text-left break-words mb-4 font-regular">{children}</p>
  ),
  ol: ({ children }) => (
    <ol className="list-decimal list-inside">{children}</ol>
  ),
  h3: ({ children }) => <h3 className="font-bold text-xl m-2">{children}</h3>,
});

export const createExerciseComponents = (frontmatter) => {
  return {
    ...createComponents(),
    $$term: (props) => (
      <Expression {...props} definitions={frontmatter.definitions} />
    ),
    $$option: (props) => (
      <ExerciseOne {...props} definitions={frontmatter.definitions} />
    ),
    $$input: (props) => (
      <ExerciseTwo {...props} definitions={frontmatter.definitions} />
    ),
    $$exercise: (props) => (
      <Exercise {...props} definitions={frontmatter.definitions} />
    ),
    $$imgQuestion: (props) => (
      <ExerciseThree {...props} definitions={frontmatter.definitions} />
    ),

    $$youtube: ExerciseFour,
    $$sentence: (props) => (
      <ExerciseFive {...props} definitions={frontmatter.definitions} />
    ),
  };
};
