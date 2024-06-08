import { createRoot } from 'react-dom/client';
import { HomePage } from './pages/HomePage';
import './global.css';

import Anglictina from './pages/Anglictina.mdx';
import Spanelstina from './pages/Spanelstina.mdx';
import Portugalstina from './pages/Portugalstina.mdx';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { App } from './App';
import { Header } from './Header';
import { Footer } from './Footer';
import English, {
  frontmatter as englishFrontmatter,
} from './pages/cviceni/eng.mdx';
import { createExerciseComponents, createComponents } from './lib/mdx';

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
        element: <Anglictina components={createComponents()} />,
      },
      {
        path: 'spanelstina',
        element: <Spanelstina components={createComponents()} />,
      },
      {
        path: 'portugalstina',
        element: <Portugalstina components={createComponents()} />,
      },
      {
        path: 'anglictina/cviceni',
        element: (
          <English components={createExerciseComponents(englishFrontmatter)} />
        ),
      },
      // {
      //   path: 'spanelstina/cviceni',
      //   element: <SpanelstinaCviceni />,
      // },
      // {
      //   path: 'portugalstina/cviceni',
      //   element: <PortugalstinaCviceni />,
      // },
      // ],
      // },
    ],
  },
]);

createRoot(document.querySelector('#app')).render(
  <RouterProvider router={router} />,
);
