import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import Button from '../../../6_shared/buttons/Button';
import { TYPE_BUTTON } from '../../../6_shared/enums/buttons';
import Title from '../../../6_shared/titles/Title';

interface LoginFormInputs {
  login: string;
  password: string;
}

const LoginForm = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>();

  const onSubmitForm: SubmitHandler<LoginFormInputs> = (data) => {
    try {
      setIsLoading(true);
      console.log(data);
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="pt-10 w-full sm:w-1/2 border-2">
      <Title>Welcome Back!</Title>
      <p className="text-center text-gray-500">Login to continue!</p>
      <form onSubmit={handleSubmit(onSubmitForm)}>
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
            {...register('login')}
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
            {...register('password')}
            className="block w-[300px] p-2.5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-nephritis focus:border-nephritis"
          />
          <p className="absolute bottom-1 pt-1 font-bold text-sm text-red">
            * Incorrect login. Try again!
          </p>
        </div>
        <div className="m-auto pt-4 w-[300px]">
          <Button
            sign="Log in"
            type={TYPE_BUTTON.LOGIN}
            isLoading={isLoading}
          />
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
