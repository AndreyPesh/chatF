import { RouterProvider } from 'react-router-dom';
import './styles/index.css';
import { router } from './router/listRoutes';
import { CookiesProvider } from 'react-cookie';
import QueryProvider from './providers/QueryProvider';
import InitUserState from './init/InitUserState';

const App = () => {
  return (
    <InitUserState>
      <QueryProvider>
        <CookiesProvider>
          <RouterProvider router={router} />
        </CookiesProvider>
      </QueryProvider>
    </InitUserState>
  );
};

export default App;
