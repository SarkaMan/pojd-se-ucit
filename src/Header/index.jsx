import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const MenuItem = ({ to, itemName, onClick }) => {
  return (
    <li>
      <Link to={to} className="font-medium text-lg text-black hover:underline hover:bg-yellow-300 hover:rounded-lg " onClick={onClick}>
        {itemName}
      </Link>
    </li>
  );
};

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleCloseMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="relative flex items-center justify-between bg-yellow-400 py-4 px-6 transition duration-300 hover:bg-yellow-500 hover:rounded-lg">
      <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium">POJĎ se UČIT</p>
      <div className="absolute top-0 right-0 mt-2 mr-2 lg:hidden">
        <button onClick={handleToggle} className="text-black focus:outline-none ml-2 mt-3 ">
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>
      <nav className={`lg:flex items-center ${isOpen ? 'block' : 'hidden'}`}>
        <ul className="flex flex-col lg:flex-row space-y-2 lg:space-y-0 lg:space-x-4">
          <MenuItem itemName={"Úvod"} to={"/"} onClick={handleCloseMenu} />
          <MenuItem itemName={"Angličtina"} to={"/anglictina"} onClick={handleCloseMenu} />
          <MenuItem itemName={"Španělština"} to={"/spanelstina"} onClick={handleCloseMenu} />
          <MenuItem itemName={"Portugalština"} to={"/portugalstina"} onClick={handleCloseMenu} />
          <MenuItem itemName={"AJ-cvičení"} to={"/anglictina/cviceni"} onClick={handleCloseMenu} />
          <MenuItem itemName={"ŠJ-cvičení"} to={"/spanelstina/cviceni"} onClick={handleCloseMenu} />
          <MenuItem itemName={"PTG-cvičení"} to={"/portugalstina/cviceni"} onClick={handleCloseMenu} />
        </ul>
      </nav>
    </header>
  );
};
