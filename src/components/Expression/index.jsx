const definitions = [
  {
    expression: 'encompasses',
    definition: 'encompasse: to include different types of things',
  },
  {
    expression: 'lung',
    definition:
      'lung: either of the two organs in the chest with which people and some animals breathe',
  },
  {
    expression: 'staple',
    definition:
      'staple: a main product or part of something/a short, thin piece of wire used to fasten sheets of paper together',
  },
  { expression: 'on foot', definition: 'on foot: by walking' },
  {
    expression: 'primarily',
    definition: 'primarily: essentially, mostly, chiefly, principally',
  },
  {
    expression: 'landmarks',
    definition:
      'landmark: a building or place that is easily recognized, especially one that you can use to judge where you are',
  },
  {
    expression: 'Throughout',
    definition: 'throughout: in every part, or during the whole period of time',
  },
  {
    expression: 'paved',
    definition:
      'paved: to cover an area of ground or a road with materials such as stone, concrete, or bricks that will form a hard, level surface',
  },
  {
    expression: 'biennials',
    definition: 'biennial: happening once every two years',
  },
  {
    expression: 'silence',
    definition: 'silence: a period without any sound',
  },
];

export const Expression = ({ children }) => {
  const handleClick = () => {
    console.log(children);
    const definition = definitions.find((item) => item.expression === children);
    if (definition) {
      alert(definition.definition);
    } else {
      alert('Definition not found.');
    }
  };

  return (
    <span className="font-bold" onClick={handleClick}>
      {children}
    </span>
  );
};
