import React from 'react';
import { Link } from 'react-router-dom';
import { Anglictina } from '../components/Anglictina';
// import './style.css';

export const Header = () => (
  <header>
  <nav>
    <ul>
      <li> <Link to="/"> <img src='src/Header/index.jsx' alt='Banner' /></Link> Úvod </li>
      <li> <Link to="/anglictina"> Angličtina </Link></li>
      <li> <Link to="/spanelstina"> Španělština </Link> </li>
      <li> <Link to="/portugalstina"> </Link> Portugalština </li>
      {/* <li> <Link to="/procvicovani"></Link> Procvičování </li> */}
    </ul>
  </nav>
  </header>
);


