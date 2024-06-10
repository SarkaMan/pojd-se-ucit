import { LearningType } from "../LearningType";

const Book = ({ name, book1, book2, book3, book4 }) => {
  return (
    <LearningType name={name} item1={book1} item2={book2} item3={book3} item4={book4} />
  );
};




export const obsahKnihAnglictina = [
  {
    name: 'Klasická literartura',
    book1: 'Pride and Prejudice od Jane Austen',
    book2: '1984 od George Orwell',
    book3: 'The Great Gatsby od F. Scott Fitzgerald',
    book4: 'To Kill a Mockingbird od Harper Lee',
  },
  {
    name: 'Fantasy a sci-fi',
    book1: 'The Lord of the Rings od J.R.R. Tolkien',
    book2: 'Harry Potter série od J.K. Rowling',
    book3: 'Dune od Frank Herbert',
    book4: "Ender's Game od Orson Scott Card",
  },
  {
    name: 'Detektivky a thrillery',
    book1: 'The Da Vinci Code od Dan Brown',
    book2: 'Sherlock Holmes série od Arthur Conan Doyle',
    book3: 'The Silent Patient od Alex Michaelides',
    book4: 'The Girl with the Dragon Tattoo od Stieg Larsson',
  },
  {
    name: 'Literatura faktu a autobiografie',
    book1: 'Steve Jobs od Walter Isaacson',
    book2: 'Educated od Tara Westover',
    book3: 'Becoming od Michelle Obama',
    book4: 'The Immortal Life of Henrietta Lacks od Rebecca Skloot',
  },
];

export const Books = ({ obsahKnih }) => {
  return (
    <div className="language-container">
      <div className="flex  gap-3">
        {obsahKnih.map((obsah) => {
          return (
            <Book
              name={obsah.name}
              book1={obsah.book1}
              book2={obsah.book2}
              book3={obsah.book3}
              book={obsah.book4}
            />
          );
        })}
      </div>
    </div>
  );
};




// SPANELSTINA
const BookSj = ({ name, book1, book2, book3, book4 }) => {
  return (
    <div className="w-full sm:w-1/2 px-2 rounded-lg overflow-hidden bg-white shadow-lg">
    <div className="p-4">
      <h1 className="text-xl font-medium mb-2"> {name} </h1>
      <p> {book1} </p>
      <p> {book2} </p>
      <p> {book3} </p>
      <p> {book4} </p>
      </div>
      </div>
    
  );
};




export const obsahKnihSpanelstina = [
  {
    name: 'Klasická literartura',
    book1: 'Don Quijote de la Mancha od Miguel de Cervantes',
    book2: 'Cien años de soledad od Gabriel García Márquez',
    book3: 'La casa de los espíritus od Isabel Allende',
    book4: 'Pedro Páramo od Juan Rulfo',
  },
  {
    name: 'TODO',
    book1: 'TODO',
    book2: 'TODO',
    book3: 'TODO',
    book4: "TODO",
  },
  {
    name: 'Detektivky a thrillery',
    book1: 'El guardián invisible od Dolores Redondo',
    book2: 'La reina del sur od Arturo Pérez-Reverte',
    book3: 'El secreto de sus ojos od Eduardo Sacheri',
    book4: 'La trilogía del Baztán od Dolores Redondo',
  },
  {
    name: 'Literatura faktu a autobiografie',
    book1: 'Vivir para contarla od Gabriel García Márquez',
    book2: 'Paula od Isabel Allende',
    book3: 'Confieso que he vivido od Pablo Neruda',
    book4: 'El olvido que seremos od Héctor Abad Faciolince',
  },
];

export const BooksSj = ({ obsahKnihSj }) => {
  return (
    <div className="language-container">
      <div className="flex  gap-3">
        {obsahKnihSj.map((obsah) => {
          return (
            <BookSj
              name={obsah.name}
              book1={obsah.book1}
              book2={obsah.book2}
              book3={obsah.book3}
              book={obsah.book4}
            />
          );
        })}
      </div>
    </div>
  );
};





// PORTUGALSTINA

const BookPtg = ({ name, book1, book2, book3, book4 }) => {
  return (
    <div className="w-full sm:w-1/2 px-2 rounded-lg overflow-hidden bg-white shadow-lg">
    <div className="p-4">
      <h1 className="text-xl font-medium mb-2"> {name} </h1>
      <p> {book1} </p>
      <p> {book2} </p>
      <p> {book3} </p>
      <p> {book4} </p>
      </div>
      </div>
    
  );
};




export const obsahKnihPortugalstina = [
  {
    name: 'Klasická literartura',
    book1: 'Os Lusíadas od Luís de Camões',
    book2: 'O Primo Basílio od José Maria de Eça de Queirós',
    book3: 'Iracema od José de Alencar',
    book4: 'Memórias Póstumas de Brás Cubas od Machado de Assis',
  },
  {
    name: 'TODO',
    book1: 'TODO',
    book2: 'TODO',
    book3: 'TODO',
    book4: "TODO",
  },
  {
    name: 'Detektivky a thrillery',
    book1: 'A chave de Salomão od José Rodrigues dos Santos',
    book2: 'O silêncio da chuva od Luiz Alfredo Garcia-Roza',
    book3: 'As Esganadas od Jô Soares',
    book4: 'O Seminarista od Rubem Fonseca',
  },
  {
    name: 'Literatura faktu a autobiografie',
    book1: 'Minha Razão de Viver od Samuel Wainer',
    book2: 'Correr: O Exercício, a Cidade e o Desafio da Vida od Drauzio Varella',
    book3: 'O Evangelho Segundo Jesus Cristo od José Saramago',
    book4: 'TODO',
  },
];

export const BooksPtg = ({ obsahKnih }) => {
  return (
    <div className="language-container">
      <div className="flex  gap-3">
        {obsahKnih.map((obsah) => {
          return (
            <Book
              name={obsah.name}
              book1={obsah.book1}
              book2={obsah.book2}
              book3={obsah.book3}
              book={obsah.book4}
            />
          );
        })}
      </div>
    </div>
  );
};
