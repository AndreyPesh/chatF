import { FormEvent, useState } from 'react';
import Button from '../../../6_shared/buttons/Button';
import { TYPE_BUTTON } from '../../../6_shared/enums/buttons';
import Title from '../../../6_shared/titles/Title';

const LoginForm = () => {

  const [isLoading, setIsLoading] = useState<boolean>(false)

  const submitForm = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('send');
    
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
    }, 3000)
  };

  return (
    <div className="pt-10 w-full sm:w-1/2 border-2">
      <Title>Welcome Back!</Title>
      <p className="text-center text-gray-500">Login to continue!</p>
      <form onSubmit={submitForm}>
        <div className="relative p-4 pb-8 flex flex-col items-center">
          <label
            htmlFor="user_login"
            className="block mb-2 w-[300px] font-bold"
          >
            Login:
          </label>
          <input
            id="user_login"
            type="text"
            className="block w-[300px] p-2.5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-nephritis focus:border-nephritis"
          />
          <p className="absolute bottom-1 pt-1 font-bold text-sm text-red">
            * Incorrect login. Try again!
          </p>
        </div>
        <div className="relative p-4 pb-8 flex flex-col items-center">
          <label
            htmlFor="user_password"
            className="block mb-2 w-[300px] font-bold"
          >
            Password:
          </label>
          <input
            id="user_password"
            type="password"
            className="block w-[300px] p-2.5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-nephritis focus:border-nephritis"
          />
          <p className="absolute bottom-1 pt-1 font-bold text-sm text-red">
            * Incorrect login. Try again!
          </p>
        </div>
        <div className="m-auto pt-4 w-[300px]">
          <Button sign="Log in" type={TYPE_BUTTON.LOGIN} isLoading={isLoading}/>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
