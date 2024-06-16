import { LearningType } from '../LearningType';

export const englishMoviesAndSeriesList = [
  {
    name: 'Filmy',
    films: [
      {
        name: 'Toy Story (1995)',
        description: 'Animovaný film s jednoduchými dialogy.',
      },
      {
        name: 'Forrest Gump (1994)',
        description:
          'Film s jednoduchou angličtinou a pomalejší výslovností hlavní postavy.',
      },
      {
        name: 'The Pursuit of Happyness (2006)',
        description: 'Inspirující film s jasnými dialogy.',
      },
      {
        name: 'Finding Nemo (2003)',
        description:
          'Populární animovaný film s jednoduchým a zábavným dialogem.',
      },
    ],
  },
  {
    name: 'Seriály',
    films: [
      {
        name: 'Friends',
        description:
          'Velmi populární sitcom s jednoduchými a každodenními dialogy.',
      },
      {
        name: 'How I Met Your Mother',
        description: 'Další sitcom s jasnými dialogy a zábavnými příběhy.',
      },
      {
        name: 'Stranger Things',
        description: 'Sci-fi seriál s jednoduchým a přístupným jazykem.',
      },
      {
        name: 'The Office (US)',
        description:
          'Komediální seriál s každodenními situacemi a humornými dialogy.',
      },
    ],
  },
];

// SPANELSTINA
export const spanishMoviesAndSeriesList = [
  {
    name: 'Filmy',
    films: [
      {
        name: "El laberinto del fauno (Pan's Labyrinth) (2006)",
        description: 'Fantastický film s jasnými dialogy.',
      },
      {
        name: 'Coco (2017)',
        description:
          'Animovaný film od Pixaru, který má mnoho dialogů ve španělštině.',
      },
      {
        name: 'El orfanato (The Orphanage) (2007)',
        description: 'Napínavý film s jasnými dialogy.',
      },
      {
        name: 'Tadeo Jones (2012)',
        description: 'Animovaný film s jednoduchým a přístupným jazykem.',
      },
    ],
  },
  {
    name: 'Seriály',
    films: [
      {
        name: 'El Internado',
        description: 'Napínavý seriál s poměrně jednoduchým jazykem.',
      },
      {
        name: 'Gran Hotel',
        description: 'Seriál s detektivním nádechem a srozumitelnými dialogy.',
      },
      {
        name: 'Narcos',
        description:
          'Seriál, který kombinuje angličtinu a španělštinu, což může být užitečné pro začátečníky.',
      },
      {
        name: 'Club de Cuervos',
        description:
          'Komediální seriál o fotbalovém klubu s přístupným jazykem.',
      },
    ],
  },
];

// PORTUGALSTINA
export const portugueseMoviesAndSeriesList = [
  {
    name: 'Filmy',
    films: [
      {
        name: 'Central do Brasil (Central Station) (1998)',
        description: 'Film s jasnými dialogy a jednoduchým jazykem.',
      },
      {
        name: 'O Auto da Compadecida (2000)',
        description:
          'Komedie s jednoduchými dialogy a kulturními prvky Brazílie.',
      },
      {
        name: 'Minha Mãe é uma Peça (2013)',
        description: 'Komediální film s jednoduchým jazykem.',
      },
      {
        name: 'Tainá: Uma Aventura na Amazônia (2000)',
        description: 'Dobrodružný film pro děti s jednoduchým jazykem.',
      },
    ],
  },
  {
    name: 'Seriály',
    films: [
      {
        name: 'Sítio do Picapau Amarelo',
        description:
          'Klasický brazilský seriál pro děti, který je jednoduchý na pochopení.',
      },
      {
        name: 'Malhação',
        description:
          'Dlouho běžící telenovela pro mladé, která používá jednoduchý a každodenní jazyk.',
      },
      {
        name: 'Os Normais',
        description: 'Komediální seriál se srozumitelnými a zábavnými dialogy.',
      },
      {
        name: '3%',
        description:
          'Sci-fi seriál s jasným a srozumitelným jazykem, vhodný pro začátečníky.',
      },
    ],
  },
];

const Movie = ({ name, movies }) => {
  return <LearningType name={name} items={movies} />;
};

export const MoviesAndSeries = ({ moviesAndSeriesList }) => {
  return (
    <div className="px-4 sm:px-6 md:px-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-4">
        {moviesAndSeriesList.map((item) => {
          return <Movie name={item.name} movies={item.films} key={item.name} />;
        })}
      </div>
    </div>
  );
};
