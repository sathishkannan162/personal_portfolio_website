import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './routes/root.jsx';
import ErrorPage from './ErrorPage.jsx';
import App from './App.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { path: '/', element: <App /> },
      {
        path: '/contact',
        element: <div>contact me</div>,
      },
      {
        path: '/projects',
        element: <div>Projects</div>,
      },
      {
        path: '/about',
        element: <div>About Me</div>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* <ChakraProvider> */}
    {/* <App /> */}
    {/* </ChakraProvider> */}
  </React.StrictMode>
);
