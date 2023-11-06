import { useState } from 'react';
import LoginForm from '../../4_features/forms/login/LoginForm';
import RegisterForm from '../../4_features/forms/register/RegisterForm';

const enum TYPE_FORM {
  LOGIN = 'login',
  REGISTER = 'register',
}

const AuthFormToggle = () => {
  const [activeForm, setActiveForm] = useState<TYPE_FORM>(TYPE_FORM.LOGIN);
  if (activeForm === TYPE_FORM.LOGIN) {
    <LoginForm />;
  }

  return (
    <div className="flex flex-col w-full justify-center items-center">
      {activeForm === TYPE_FORM.LOGIN ? <LoginForm /> : <RegisterForm />}
      {activeForm === TYPE_FORM.LOGIN ? (
        <p
          onClick={() => setActiveForm(TYPE_FORM.REGISTER)}
          className="mt-5 font-bold select-none underline cursor-pointer"
        >
          Don't have an account?
        </p>
      ) : (
        <p
          onClick={() => setActiveForm(TYPE_FORM.LOGIN)}
          className="mt-5 font-bold select-none underline cursor-pointer"
        >
          Do you have an account?
        </p>
      )}
    </div>
  );
};

export default AuthFormToggle;
