import React from 'react';
import { useNavigate } from 'react-router-dom';

export const LanguageCard = ({ name, flag, description }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    let path = '';
    switch (name) {
      case 'Angličtina':
        path = 'anglictina';
        break;
      case 'Španělština':
        path = 'spanelstina';
        break;
      case 'Portugalština':
        path = 'portugalstina';
        break;
      default:
        path = '/'; // Default path if the language is not recognized
    }
    navigate(`/${path}`);
  };

  return (
    <div
      className="p-5 w-full min-w-[200px] rounded-lg overflow-hidden bg-white shadow-xl cursor-pointer transition-transform transform hover:scale-105"
      onClick={handleClick}
    >
      <h1 className="text-lg text-center font-medium mb-2">{name}</h1>
      <img className="vlajky" src={flag} alt={`${name} flag`} />
      <p>{description}</p>
    </div>
  );
};
