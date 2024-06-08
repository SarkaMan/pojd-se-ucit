import { createRoot } from 'react-dom/client';
import { HomePage } from './pages/HomePage';
import './global.css';
import { Anglictina } from './components/Anglictina';
import { Spanelstina } from './components/Spanelstina';
import { Portugalstina } from './components/Portugalstina';
import { AboutInfo } from './components/About';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { App } from './App';
import { Header } from './Header';
import { Footer } from './Footer';
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: 'anglictina',
        element: <Anglictina />,
      },
      {
        path: 'spanelstina',
        element: <Spanelstina />,
      },
      {
        path: 'portugalstina',
        element: <Portugalstina />,
      },
      // {
      //   path: 'anglictina/cviceni',
      //   element: <AnglictinaCviceni />,
      // },
      // {
      //   path: 'spanelstina/cviceni',
      //   element: <SpanelstinaCviceni />,
      // },
      // {
      //   path: 'portugalstina/cviceni',
      //   element: <PortugalstinaCviceni />,
      // },
    ],
  },
]);




createRoot(document.querySelector('#app')).render(
  <RouterProvider router={router} />
);
