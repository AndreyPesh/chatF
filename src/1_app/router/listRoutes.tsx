import { createBrowserRouter } from 'react-router-dom';
import LayoutHeader from '../layouts/LayoutHeader';
import MainPage from '../../2_pages/MainPage';
import ContactsPage from '../../2_pages/ContactsPage';
import MessagePage from '../../2_pages/MessagePage';
import NotFoundPage from '../../2_pages/NotFoundPage';
import { ROUTES } from '../../6_shared/enums/routes';
import ProtectedRoute from './ProtectedRoute';

const listRoutes = [
  {
    element: <LayoutHeader />,
    children: [
      {
        path: ROUTES.MAIN,
        element: <MainPage />,
      },
      {
        path: ROUTES.MESSAGES,
        element: (
          <ProtectedRoute>
            <MessagePage />
          </ProtectedRoute>
        ),
      },
      {
        path: ROUTES.CONTACTS,
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
