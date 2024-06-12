import React from 'react';
import { Outlet } from 'react-router-dom';
import { Footer } from '../Footer';
import { Header } from '../Header';

export const App = () => (
  <>
    <Header />
    <main className="container mx-auto w-full max-w-5xl bg-gray-50 shadow-2xl">
        <Outlet />
    </main>
    <Footer />
  </>
);

