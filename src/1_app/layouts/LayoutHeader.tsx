import { Outlet } from "react-router-dom";
import Header from "../../3_widgets/header/Header";

const LayoutHeader = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default LayoutHeader;