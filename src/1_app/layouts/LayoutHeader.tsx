import { Outlet } from 'react-router-dom';
import Header from '../../3_widgets/header/Header';

const LayoutHeader = () => {
  return (
    <div className='m-auto flex max-w-[1260px]'>
      <Header />
      <Outlet />
    </div>
  );
};

export default LayoutHeader;
