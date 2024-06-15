import { LearningType } from "../LearningType";

const Film = ({ name, film1, film2, film3, film4 }) => {
  return (
    <LearningType name={name} item1={film1} item2={film2} item3={film3} item4={film4} />
  );
};


export const englishFilmsList = [
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
    film4: "- The Office (US) - Komediální seriál s každodenními situacemi a humornými dialogy.",
  },
];

export const Films = ({ filmsList }) => {
  return (
    <div className="px-4 sm:px-6 md:px-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-4">
        {filmsList.map((item) => {
          return (
            <Film
              name={item.name}
              film1={item.film1}
              film2={item.film2}
              film3={item.film3}
              film4={item.film4}
            />
          );
        })}
      </div>
    </div>
  );
};




// SPANELSTINA
export const spanishFilmsList = [
  {
    name: 'Filmy',
    film1: '- El laberinto del fauno (Pan\'s Labyrinth) (2006) - Fantastický film s jasnými dialogy.',
    film2: '- Coco (2017) - Animovaný film od Pixaru, který má mnoho dialogů ve španělštině.',
    film3: '- El orfanato (The Orphanage) (2007) - Napínavý film s jasnými dialogy.',
    film4: '- Tadeo Jones (2012) - Animovaný film s jednoduchým a přístupným jazykem.',
  },
  {
    name: 'Seriály',
    film1: '- El Internado - Napínavý seriál s poměrně jednoduchým jazykem.',
    film2: '- Gran Hotel - Seriál s detektivním nádechem a srozumitelnými dialogy.',
    film3: '- Narcos - Seriál, který kombinuje angličtinu a španělštinu, což může být užitečné pro začátečníky.',
    film4: "-Club de Cuervos - Komediální seriál o fotbalovém klubu s přístupným jazykem.",
  },
];

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


export const portugueseFilmsList = [
  {
    name: 'Filmy',
    film1: '- Central do Brasil (Central Station) (1998) - Film s jasnými dialogy a jednoduchým jazykem.',
    film2: '- O Auto da Compadecida (2000) - Komedie s jednoduchými dialogy a kulturními prvky Brazílie.',
    film3: '- Minha Mãe é uma Peça (2013) - Komediální film s jednoduchým jazykem.',
    film4: '- Tainá: Uma Aventura na Amazônia (2000) - Dobrodružný film pro děti s jednoduchým jazykem.',
  },
  {
    name: 'Seriály',
    film1: '- Sítio do Picapau Amarelo - Klasický brazilský seriál pro děti, který je jednoduchý na pochopení.',
    film2: '- Malhação - Dlouho běžící telenovela pro mladé, která používá jednoduchý a každodenní jazyk.',
    film3: '- Os Normais - Komediální seriál se srozumitelnými a zábavnými dialogy',
    film4: "- 3% - Sci-fi seriál s jasným a srozumitelným jazykem, vhodný pro začátečníky.",
  },
];

