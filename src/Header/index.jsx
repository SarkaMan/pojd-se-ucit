import React from 'react';
import { Link } from 'react-router-dom';

const MenuItem = ({to, itemName}) => {
  return(
      <li> 
        <Link to={to} className="font-medium text-lg text-black hover:underline"> {itemName} </Link>
       </li>
  )
}


export const Header = () => (
  <header className='flex items-center justify-evenly bg-yellow-400 py-8 '>
  <p className='text-5xl font-medium mr-80 '> POJĎ se UČIT </p>
  <nav>
    <ul className="flex space-x-4 ">
      <MenuItem itemName={"Domů"} to={"/"}/>
      <MenuItem itemName={"Angličtina"} to={"/anglictina"}/>
      <MenuItem itemName={"Španělština"} to={"/spanelstina"}/>
      <MenuItem itemName={"Portugalština"} to={"/portugalstina"}/>
      <MenuItem itemName={"Angličtina-cvičení"} to={"/anglictina/cviceni"}/>
      <MenuItem itemName={"Španělština-cvičení"} to={"/spanelstina/cviceni"}/>
      <MenuItem itemName={"Portugalština-cvičení"} to={"/portugalstina/cviceni"}/>
    </ul>
  </nav>
  </header>
);

