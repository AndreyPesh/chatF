import { RouterProvider } from 'react-router-dom';
import './styles/index.css';
import { router } from './router/listRoutes';
import { CookiesProvider } from 'react-cookie';
import QueryProvider from './providers/QueryProvider';

const App = () => {
  return (
    <QueryProvider>
      <CookiesProvider>
        <RouterProvider router={router} />
      </CookiesProvider>
    </QueryProvider>
  );
};

export default App;
