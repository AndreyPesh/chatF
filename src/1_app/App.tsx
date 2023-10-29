import { RouterProvider } from 'react-router-dom';
import './styles/index.css';
import { router } from './router/listRoutes';

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App;
