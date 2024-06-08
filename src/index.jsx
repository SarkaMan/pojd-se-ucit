import { createRoot } from 'react-dom/client';
import { HomePage } from './pages/HomePage';
import './global.css';
// import { AnglictinaCviceni } from './components/Anglictina';
import { QuizForm } from './components/QuizForm';
import { VideoQuiz } from './components/VideoQuiz';
import Anglictina  from './pages/Anglictina.mdx';
import Spanelstina  from './pages/Spanelstina.mdx';
import Portugalstina  from './pages/Portugalstina.mdx';
import About from './pages/About.mdx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { App } from './App';
import { Header } from './Header';
import { Footer } from './Footer';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />},
    // children: [
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
    // ],
  // },
]);

createRoot(document.querySelector('#app')).render(
  <RouterProvider router={router} />,
);
