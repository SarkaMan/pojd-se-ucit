export const Interest = ({ name, text,  }) => {
  return (
    <div className="w-full sm:w-1/2 px-2">
      <h1> Zajímavosti </h1>
      <h1 className="text-xl font-medium mb-2 mt-2"> {name} </h1>
      <p> {text} </p>
      </div>
    
  );
};

export const obsahZajimavostiAnglictina = [
  {
    name: 'Vzdušný jazyk',
    text: 'Tímto souslovím se angličtina neoznačuje proto, že by nám její vyslovování šetřilo plíce.-Jde o to, že i v leteckém prostoru také funguje jako lingva franka. To znamená, že jako pilot musíte zvládat v angličtině komunikovat – jinak to totiž nejde.',
  },
  {
    name: 'Méně slov k domluvě než peněz za dva obědy',
    text: 'Tímto souslovím se angličtina neoznačuje proto, že by nám její vyslovování šetřilo plíce.-Jde o to, že i v leteckém prostoru také funguje jako lingva franka. To znamená, že jako pilot musíte zvládat v angličtině komunikovat – jinak to totiž nejde.',
  },
  {
    name: 'Nejdelší slovo',
    text: 'Antidisestablishmentarianism',
  },
];


export const Interests = ({ obsahZajimavosti }) => {
  return (
    <div className="language-container">
      <div className="flex flex-col gap-4">
        {obsahZajimavosti.map((obsah) => {
          return (
            <Interest
              name={obsah.name}
              text={obsah.text}
            />
          );
        })}
      </div>
    </div>
  );
};


// SPANELSTINA

export const InterestSj = ({ name, text,  }) => {
  return (
    <div className="w-full sm:w-1/2 px-2">
      <h1> Zajímavosti </h1>
      <h1 className="text-xl font-medium mb-2 mt-2"> {name} </h1>
      <p> {text} </p>
      </div>
    
  );
};

export const obsahZajimavostiSpanelstina = [
  {
    name: 'Vzdušný jazyk',
    text: 'Tímto souslovím se angličtina neoznačuje proto, že by nám její vyslovování šetřilo plíce.-Jde o to, že i v leteckém prostoru také funguje jako lingva franka. To znamená, že jako pilot musíte zvládat v angličtině komunikovat – jinak to totiž nejde.',
  },
  {
    name: 'Méně slov k domluvě než peněz za dva obědy',
    text: 'Tímto souslovím se angličtina neoznačuje proto, že by nám její vyslovování šetřilo plíce.-Jde o to, že i v leteckém prostoru také funguje jako lingva franka. To znamená, že jako pilot musíte zvládat v angličtině komunikovat – jinak to totiž nejde.',
  },
  {
    name: 'Nejdelší slovo',
    text: 'Antidisestablishmentarianism',
  },
];


export const InterestsSj = ({ obsahZajimavosti }) => {
  return (
    <div className="language-container">
      <div className="flex flex-col gap-4">
        {obsahZajimavostiSpanelstina.map((obsah) => {
          return (
            <InterestSj
              name={obsah.name}
              text={obsah.text}
            />
          );
        })}
      </div>
    </div>
  );
};




// PORTUGALSTINA

export const InterestPtg = ({ name, text,  }) => {
  return (
    <div className="w-full sm:w-1/2 px-2">
      <h1> Zajímavosti </h1>
      <h1 className="text-xl font-medium mb-2 mt-2"> {name} </h1>
      <p> {text} </p>
      </div>
    
  );
};

export const obsahZajimavostiPortugalstina = [
  {
    name: 'Vzdušný jazyk',
    text: 'Tímto souslovím se angličtina neoznačuje proto, že by nám její vyslovování šetřilo plíce.-Jde o to, že i v leteckém prostoru také funguje jako lingva franka. To znamená, že jako pilot musíte zvládat v angličtině komunikovat – jinak to totiž nejde.',
  },
  {
    name: 'Méně slov k domluvě než peněz za dva obědy',
    text: 'Tímto souslovím se angličtina neoznačuje proto, že by nám její vyslovování šetřilo plíce.-Jde o to, že i v leteckém prostoru také funguje jako lingva franka. To znamená, že jako pilot musíte zvládat v angličtině komunikovat – jinak to totiž nejde.',
  },
  {
    name: 'Nejdelší slovo',
    text: 'Antidisestablishmentarianism',
  },
];


export const InterestsPtg = ({ obsahZajimavosti }) => {
  return (
    <div className="language-container">
      <div className="flex flex-col gap-4">
        {obsahZajimavostiPortugalstina.map((obsah) => {
          return (
            <InterestPtg
              name={obsah.name}
              text={obsah.text}
            />
          );
        })}
      </div>
    </div>
  );
};
