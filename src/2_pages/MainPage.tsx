import AuthFormToggle from '../3_widgets/toggles/AuthFormToggle';
import useAuth from '../6_shared/hooks/useAuth';

const MainPage = () => {
  const { isAuth } = useAuth();
  if (isAuth) {
    return <h1>Hello, friend!</h1>;
  }
  return (
    <div className="w-full">
      <AuthFormToggle />
    </div>
  );
};

export default MainPage;
