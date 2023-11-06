import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import Button from '../../../6_shared/buttons/Button';
import { TYPE_BUTTON } from '../../../6_shared/enums/buttons';
import Title from '../../../6_shared/titles/Title';
import { yupResolver } from '@hookform/resolvers/yup';
import { loginFormSchema } from './validation/loginValidationSchema';
import FormErrorMessage from '../../../6_shared/error/FormErrorMessage';
import { LoginFormInputs } from '../../../6_shared/api/interfaces/user';
import { loginUserFetch } from '../../../6_shared/api/user/user';

const LoginForm = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>({
    resolver: yupResolver(loginFormSchema),
  });

  const onSubmitForm: SubmitHandler<LoginFormInputs> = async (data) => {
    try {
      setIsLoading(true);
      const response = await loginUserFetch(data);
      console.log(response);
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="pt-10 w-full sm:w-1/2">
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
          <FormErrorMessage message={errors.login?.message} />
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
            autoComplete="on"
            {...register('password')}
            className="block w-[300px] p-2.5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-nephritis focus:border-nephritis"
          />
          <FormErrorMessage message={errors.password?.message} />
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
