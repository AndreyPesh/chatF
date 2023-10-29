import { createBrowserRouter } from 'react-router-dom';
import LayoutHeader from '../layouts/LayoutHeader';
import MainPage from '../../2_pages/MainPage';
import ContactsPage from '../../2_pages/ContactsPage';
import MessagePage from '../../2_pages/MessagePage';
import NotFoundPage from '../../2_pages/NotFoundPage';

const listRoutes = [
  {
    element: <LayoutHeader />,
    children: [
      {
        path: '/',
        element: <MainPage />,
      },
      {
        path: '/messages',
        element: <MessagePage />,
      },
      {
        path: '/contacts',
        element: <ContactsPage />,
      },
      {
        path: '*',
        element: <NotFoundPage />,
      },
    ],
  },
];

export const router = createBrowserRouter(listRoutes);
