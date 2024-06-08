import { createRoot } from 'react-dom/client';
import { HomePage } from './pages/HomePage';
import './global.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

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
      {
        path: 'anglictina/cviceni',
        element: <AnglictinaCviceni />,
      },
      {
        path: 'spanelstina/cviceni',
        element: <SpanelstinaCviceni />,
      },
      {
        path: 'portugalstina/cviceni',
        element: <PortugalstinaCviceni />,
      },
    ],
  },
]);

createRoot(document.querySelector('#app')).render(
  <RouterProvider router={router} />,
);
