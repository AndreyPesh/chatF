import { RouterProvider } from 'react-router-dom';
import './styles/index.css';
import { router } from './router/listRoutes';
import { CookiesProvider } from "react-cookie";

const App = () => {
  return (
    <CookiesProvider>
      <RouterProvider router={router} />
    </CookiesProvider>
  )
}

export default App;
