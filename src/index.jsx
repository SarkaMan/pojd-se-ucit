import { createRoot } from 'react-dom/client';
import { HomePage } from './pages/HomePage';
import './global.css';

import Anglictina from './pages/Anglictina.mdx';
import Spanelstina from './pages/Spanelstina.mdx';
import Portugalstina from './pages/Portugalstina.mdx';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { App } from './App';

import English, {
  frontmatter as englishFrontmatter,
} from './pages/cviceni/eng.mdx';
import Spanish, {
  frontmatter as spanishFrontmatter,
} from './pages/cviceni/sp.mdx';
import Portuguese, {
  frontmatter as portugueseFrontmatter,
} from './pages/cviceni/ptg.mdx';
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
      {
        path: 'spanelstina/cviceni',
        element: (
          <Spanish components={createExerciseComponents(spanishFrontmatter)} />
        ),
      },
      {
        path: 'portugalstina/cviceni',
        element: (
          <Portuguese
            components={createExerciseComponents(portugueseFrontmatter)}
          />
        ),
      },
    ],
  },
]);

createRoot(document.querySelector('#app')).render(
  <RouterProvider router={router} />,
);


