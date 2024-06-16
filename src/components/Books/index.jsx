import { LearningType } from "../LearningType";

const Book = ({ name, books }) => {
  return (
    <LearningType name={name} items={books} />
  );
};


export const englishBooksList = [
  {
    name: 'Klasická literatura',
    books: [
      { name: 'Pride and Prejudice', author: 'Jane Austen' },
      { name: '1984', author: 'George Orwell' },
      { name: 'The Great Gatsby', author: 'F. Scott Fitzgerald' },
      { name: 'To Kill a Mockingbird', author: 'Harper Lee' }
    ]
  },
  {
    name: 'Fantasy a sci-fi',
    books: [
      { name: 'The Lord of the Rings', author: 'J.R.R. Tolkien' },
      { name: 'Harry Potter série', author: 'J.K. Rowling' },
      { name: 'Dune', author: 'Frank Herbert' },
      { name: "Ender's Game", author: 'Orson Scott Card' }
    ]
  },
  {
    name: 'Detektivky a thrillery',
    books: [
      { name: 'The Da Vinci Code', author: 'Dan Brown' },
      { name: 'Sherlock Holmes série', author: 'Arthur Conan Doyle' },
      { name: 'The Silent Patient', author: 'Alex Michaelides' },
      { name: 'The Girl with the Dragon Tattoo', author: 'Stieg Larsson' }
    ]
  },
  {
    name: 'Literatura faktu a autobiografie',
    books: [
      { name: 'Steve Jobs', author: 'Walter Isaacson' },
      { name: 'Educated', author: 'Tara Westover' },
      { name: 'Becoming', author: 'Michelle Obama' },
      { name: 'The Immortal Life of Henrietta Lacks', author: 'Rebecca Skloot' }
    ]
  }
];

export const spanishBooksList = [
  {
    name: 'Klasická literatura',
    books: [
      { name: 'Don Quijote de la Mancha', author: 'Miguel de Cervantes' },
      { name: 'Cien años de soledad', author: 'Gabriel García Márquez' },
      { name: 'La casa de los espíritus', author: 'Isabel Allende' },
      { name: 'Pedro Páramo', author: 'Juan Rulfo' }
    ]
  },
  {
    name: 'Fantasy a sci-fi',
    books: [
      { name: 'Memorias de Idhún: La Resistencia', author: 'Laura Gallego García' },
      { name: 'La leyenda del Rey Errante', author: 'Laura Gallego García' },
      { name: 'El Hobbit', author: 'J.R.R. Tolkien' },
      { name: 'Cronopaisaje', author: 'Gregory Benford' }
    ]
  },
  {
    name: 'Detektivky a thrillery',
    books: [
      { name: 'El guardián invisible', author: 'Dolores Redondo' },
      { name: 'La reina del sur', author: 'Arturo Pérez-Reverte' },
      { name: 'El secreto de sus ojos', author: 'Eduardo Sacheri' },
      { name: 'La trilogía del Baztán', author: 'Dolores Redondo' }
    ]
  },
  {
    name: 'Literatura faktu a autobiografie',
    books: [
      { name: 'Vivir para contarla', author: 'Gabriel García Márquez' },
      { name: 'Paula', author: 'Isabel Allende' },
      { name: 'Confieso que he vivido', author: 'Pablo Neruda' },
      { name: 'El olvido que seremos', author: 'Héctor Abad Faciolince' }
    ]
  }
];


export const portugueseBooksList = [
  {
    name: 'Klasická literatura',
    books: [
      { name: 'Os Lusíadas', author: 'Luís de Camões' },
      { name: 'O Primo Basílio', author: 'José Maria de Eça de Queirós' },
      { name: 'Iracema', author: 'José de Alencar' },
      { name: 'Memórias Póstumas de Brás Cubas', author: 'Machado de Assis' }
    ]
  },
  {
    name: 'Fantasy a sci-fi',
    books: [
      { name: 'A Batalha do Apocalipse: Da Queda dos Anjos ao Crepúsculo do Mundo', author: 'Eduardo Spohr' },
      { name: 'O Alquimista', author: 'Paulo Coelho' },
      { name: 'A Guerra dos Tronos', author: 'George R.R. Martin' },
      { name: 'Filhos do Éden: Herdeiros de Atlântida', author: 'Eduardo Spohr' }
    ]
  },
  {
    name: 'Detektivky a thrillery',
    books: [
      { name: 'A chave de Salomão', author: 'José Rodrigues dos Santos' },
      { name: 'O silêncio da chuva', author: 'Luiz Alfredo Garcia-Roza' },
      { name: 'As Esganadas', author: 'Jô Soares' },
      { name: 'O Seminarista', author: 'Rubem Fonseca' }
    ]
  },
  {
    name: 'Literatura faktu a autobiografie',
    books: [
      { name: 'Minha Razão de Viver', author: 'Samuel Wainer' },
      { name: 'Correr: O Exercício, a Cidade e o Desafio da Vida', author: 'Drauzio Varella' },
      { name: 'O Evangelho Segundo Jesus Cristo', author: 'José Saramago' },
      { name: 'Os Sertões', author: 'Euclides da Cunha' }
    ]
  }
];



export const Books = ({ booksList }) => {
  return (
      <div className="px-4 sm:px-6 md:px-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {booksList.map((item) => {
            return (
              <Book name={item.name} books={item.books} key={item.name} />
            );
          })}
        </div>
      </div>
  );
};


