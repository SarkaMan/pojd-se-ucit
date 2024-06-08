import '../../../src/index.css';
import { Article } from '../../components/Article';
import { ExerciseOne } from '../../components/ExerciseOne';
import { Expression } from '../../components/Expression';
import English from '../../eng.mdx';

const components = {
  $$term: Expression,
  $$option: () => 'OPTION',
  $$input: () => 'INPUT',
};

export const HomePage = () => {
  return (
    <>
      <English components={components} />
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <Article />
      <ExerciseOne />
    </>
  );
};
