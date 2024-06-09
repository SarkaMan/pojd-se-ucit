import React from 'react';
import { Outlet } from 'react-router-dom';
import { Footer } from '../Footer';
import { Header } from '../Header';

export const App = () => (
  <>
    <Header />
    <main className="container mx-auto text-lg max-w-5xl">
      <Outlet />
    </main>
    <Footer />
  </>
);
