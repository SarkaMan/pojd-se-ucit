import React from 'react';
import { Outlet } from 'react-router-dom';
import { Footer } from '../Footer';
import { Header } from '../Header';

export const App = () => (
  <>
    <Header />
    <main className="px-5 ">
      
      <Outlet />
    </main>
    <Footer />
  </>
);
