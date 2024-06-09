import React from 'react';
import { Link } from 'react-router-dom';

// import './style.css';


// pt-20

export const Header = () => (
  <header className='flex items-center justify-between bg-yellow-200 py-8 '>
  <p className='text-5xl font-medium  '> POJĎ se UČIT </p>
  <nav>
    <ul className="flex space-x-4 ">
      <li> <Link to="/anglictina" className=" font-medium text-lg text-black hover:text-gray-700"> Angličtina </Link></li>
      <li> <Link to="/spanelstina" className="font-medium text-lg hover:underline"> Španělština </Link> </li>
      <li> <Link to="/portugalstina" className="font-medium text-lg hover:underline"> Portugalština </Link>  </li>
      <li> <Link to="/anglictina/cviceni" className="font-medium text-lg hover:underline"> Angličtina-cvičení </Link>  </li>
      <li> <Link to="/spanelstina/cviceni" className="font-medium text-lg hover:underline"> Španělština-cvičení </Link>  </li>
      <li> <Link to="/portugalstina/cviceni" className="font-medium text-lg hover:underline"> Portugalština-cvičení </Link>  </li>
      
      {/* <li> <Link to="/procvicovani"></Link> Procvičování </li> */}
    </ul>
  </nav>
  </header>
);

