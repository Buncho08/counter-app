import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Top from './pages/Top.jsx';
import Monitor from './pages/Monitor.jsx';
import Counter from './pages/Counter.jsx';
import Test from './pages/Test.jsx';

const router = createBrowserRouter([
  { path: '/', element: <Top /> },
  { path: '/monitor', element: <Monitor /> },
  { path: '/counter', element: <Counter /> },
  { path: '/test', element: <Test /> },
]);


export default function App() {
  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  )
}