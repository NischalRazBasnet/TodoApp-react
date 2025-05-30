import React from 'react';
import { createBrowserRouter } from 'react-router';
import RootLayout from './components/RootLayout';
import TodoPage from './pages/todo/TodoPage';
import { RouterProvider } from 'react-router-dom';
import TodoAdd from './pages/todo/TodoAdd';
import TodoEdit from './pages/todo/TodoEdit';

export default function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <TodoPage />,
        },
        {
          path: 'add-todo',
          element: <TodoAdd />,
        },
        {
          path: 'edit-todo/:id',
          element: <TodoEdit />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}
