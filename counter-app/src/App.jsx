import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Top from './pages/Top.jsx';
import Monitor from './pages/Monitor.jsx';
import Counter from './pages/Counter.jsx';
import Main from './pages/Main.jsx';
import Settings from './pages/Settings.jsx';

const router = createBrowserRouter([
  { path: '/', element: <Top /> },
  { path: '/monitor', element: <Monitor /> },
  { path: '/counter', element: <Counter /> },
  { path: '/main', element: <Main /> },
  { path: '/settings', element: <Settings /> },
]);


export default function App() {
  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  )
}