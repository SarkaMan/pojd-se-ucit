import { LearningType } from "../LearningType";

const Film = ({ name, film1, film2, film3, film4 }) => {
  return (
    <LearningType name={name} item1={film1} item2={film2} item3={film3} item4={film4} />
  );
};


export const obsahFilmAnglictina = [
  {
    name: 'Filmy',
    film1: '- Toy Story (1995) - Animovaný film s jednoduchými dialogy.',
    film2: '- Forrest Gump (1994) - Film s jednoduchou angličtinou a pomalejší výslovností hlavní postavy.',
    film3: '- The Pursuit of Happyness (2006)',
    film4: '- Finding Nemo (2003) - Populární animovaný film s jednoduchým a zábavným dialogem.',
  },
  {
    name: 'Seriály',
    film1: '- Friends - Velmi populární sitcom s jednoduchými a každodenními dialogy.',
    film2: '- How I Met Your Mother - Další sitcom s jasnými dialogy a zábavnými příběhy.',
    film3: '- Stranger Things - Sci-fi seriál s jednoduchým a přístupným jazykem.',
    film4: "- The Office (US)",
  },
];

export const Films = ({ obsahFilm }) => {
  return (
    <div className="language-container">
      <div className="flex  gap-3">
        {obsahFilm.map((obsah) => {
          return (
            <Film
              name={obsah.name}
              film1={obsah.film1}
              film2={obsah.film2}
              film3={obsah.film3}
              film4={obsah.film4}
            />
          );
        })}
      </div>
    </div>
  );
};




// SPANELSTINA

const FilmSj = ({ name, film1, film2, film3, film4 }) => {
  return (
    <div className="w-full sm:w-1/2 px-2 rounded-lg overflow-hidden bg-white shadow-lg">
    <div className="p-4">
      <h1 className="text-xl font-medium mb-2 "> {name} </h1>
      <p> {film1} </p>
      <p> {film2} </p>
      <p> {film3} </p>
      <p> {film4} </p>
      </div>
      </div>
  );
};


export const obsahFilmSpanelstina = [
  {
    name: 'Filmy',
    film1: '- Toy Story (1995) - Animovaný film s jednoduchými dialogy.',
    film2: '- Forrest Gump (1994) - Film s jednoduchou angličtinou a pomalejší výslovností hlavní postavy.',
    film3: '- The Pursuit of Happyness (2006)',
    film4: '- Finding Nemo (2003) - Populární animovaný film s jednoduchým a zábavným dialogem.',
  },
  {
    name: 'Seriály',
    film1: '- Friends - Velmi populární sitcom s jednoduchými a každodenními dialogy.',
    film2: '- How I Met Your Mother - Další sitcom s jasnými dialogy a zábavnými příběhy.',
    film3: '- Stranger Things - Sci-fi seriál s jednoduchým a přístupným jazykem.',
    film4: "- The Office (US)",
  },
];

export const FilmsSj = ({ obsahFilm }) => {
  return (
    <div className="language-container">
      <div className="flex  gap-3">
        {obsahFilmSpanelstina.map((obsah) => {
          return (
            <FilmSj
              name={obsah.name}
              film1={obsah.film1}
              film2={obsah.film2}
              film3={obsah.film3}
              film4={obsah.film4}
            />
          );
        })}
      </div>
    </div>
  );
};



// PORTUGALSTINA
const FilmPtg = ({ name, film1, film2, film3, film4 }) => {
  return (
    <div className="w-full sm:w-1/2 px-2 rounded-lg overflow-hidden bg-white shadow-lg">
    <div className="p-4">
      <h1 className="text-xl font-medium mb-2 "> {name} </h1>
      <p> {film1} </p>
      <p> {film2} </p>
      <p> {film3} </p>
      <p> {film4} </p>
      </div>
      </div>
  );
};


export const obsahFilmPortugalstina = [
  {
    name: 'Filmy',
    film1: '- Toy Story (1995) - Animovaný film s jednoduchými dialogy.',
    film2: '- Forrest Gump (1994) - Film s jednoduchou angličtinou a pomalejší výslovností hlavní postavy.',
    film3: '- The Pursuit of Happyness (2006)',
    film4: '- Finding Nemo (2003) - Populární animovaný film s jednoduchým a zábavným dialogem.',
  },
  {
    name: 'Seriály',
    film1: '- Friends - Velmi populární sitcom s jednoduchými a každodenními dialogy.',
    film2: '- How I Met Your Mother - Další sitcom s jasnými dialogy a zábavnými příběhy.',
    film3: '- Stranger Things - Sci-fi seriál s jednoduchým a přístupným jazykem.',
    film4: "- The Office (US)",
  },
];

export const FilmsPtg = ({ obsahFilm }) => {
  return (
    <div className="language-container">
      <div className="flex  gap-3">
        {obsahFilmPortugalstina.map((obsah) => {
          return (
            <FilmPtg
              name={obsah.name}
              film1={obsah.film1}
              film2={obsah.film2}
              film3={obsah.film3}
              film4={obsah.film4}
            />
          );
        })}
      </div>
    </div>
  );
};
