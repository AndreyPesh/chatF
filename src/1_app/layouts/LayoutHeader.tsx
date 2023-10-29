import { Outlet } from 'react-router-dom';
import Header from '../../3_widgets/header/Header';

const LayoutHeader = () => {
  return (
    <div className='flex'>
      <Header />
      <Outlet />
    </div>
  );
};

export default LayoutHeader;
