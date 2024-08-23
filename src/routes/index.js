import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Home from '../components/home/Home';
import AdminPanel from '../components/panel/AdminPanel';
import Messages from '../components/panel/messages/Messages';
import Widgets from '../components/panel/widgets/Widgets';
import SignIn from '../components/auth/SignIn';
import Reports from '../components/panel/reports/Reports';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/panel',
    element: <AdminPanel />,
    children: [
      {
        path: 'widgets',
        element: <Widgets />,
      },
      {
        path: 'messages',
        element: <Messages />,
      },
      {
        path: 'reports',
        element: <Reports />,
      },
    ],
  },
  {
    path: '/signin',
    element: <SignIn />,
  },
]);
