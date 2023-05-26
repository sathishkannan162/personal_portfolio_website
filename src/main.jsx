import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './routes/root.jsx';
import ErrorPage from './components/ErrorPage/ErrorPage.jsx';
import App from './components/HomePage/App.jsx';
import ProjectsPage from './components/ProjectsPage/ProjectsPage.jsx';
import ContactPage from './components/ContactPage/ContactPage.jsx';
import AboutPage from './components/AboutPage/AboutPage.jsx';
import ProjectsByTags from './components/ProjectsTagPage/ProjectsByTags.jsx';
import Certifications from './components/CertificationsPage/Certifications.jsx';
import MilestonePage from './components/MilestonesPage/MilestonePage.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { path: '/', element: <App /> },
      {
        path: '/contact',
        element: <ContactPage />,
      },
      {
        path: '/about',
        element: <AboutPage />,
      },
      {
        path: '/projects',
        element: <ProjectsPage />,
      },
      {
        path: '/projects/:tag',
        element: <ProjectsByTags />,
      },
      {
        path: '/milestones',
        element: <MilestonePage />,
      },
      {
        path: '/certifications',
        element: <Certifications />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
