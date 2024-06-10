import React from 'react';
import { Outlet } from 'react-router-dom';
import { Footer } from '../Footer';
import { Header } from '../Header';

export const App = () => (
  <>
    <Header />
    <main className="container mx-auto text-lg max-w-5xl bg-gray-50 shadow-2xl px-10">
      <Outlet />
    </main>
    <Footer />
  </>
);
