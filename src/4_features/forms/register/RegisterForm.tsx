import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import Button from '../../../6_shared/buttons/Button';
import { TYPE_BUTTON } from '../../../6_shared/enums/buttons';
import Title from '../../../6_shared/titles/Title';
import { yupResolver } from '@hookform/resolvers/yup';
import { registerFormSchema } from './validation/registerValidationSchema';
import FormErrorMessage from '../../../6_shared/error/FormErrorMessage';
import { RegisterFormInputs } from '../../../6_shared/api/interfaces/user';

const RegisterForm = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormInputs>({
    resolver: yupResolver(registerFormSchema),
  });

  const onSubmitForm: SubmitHandler<RegisterFormInputs> = async (data) => {
    try {
      setIsLoading(true);
      // const response = await loginUserFetch(data);
      // console.log(response);
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="pt-10 w-full sm:w-1/2 border-2">
      <Title>Register your account!</Title>
      <p className="text-center text-gray-500">Fill out the form!</p>
      <form onSubmit={handleSubmit(onSubmitForm)}>
        <div className="relative p-4 pb-8 flex flex-col items-center">
          <label
            htmlFor="user_firstName"
            className="block mb-2 w-[300px] font-bold"
          >
            Login:
          </label>
          <input
            id="user_firstName"
            type="text"
            {...register('firstName')}
            className="block w-[300px] p-2.5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-nephritis focus:border-nephritis"
          />
          <FormErrorMessage message={errors.firstName?.message} />
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
            sign="Register"
            type={TYPE_BUTTON.LOGIN}
            isLoading={isLoading}
          />
        </div>
      </form>
      <p className="mt-5 pr-4 font-bold text-end select-none underline cursor-pointer">
        Don't have an account?
      </p>
    </div>
  );
};

export default RegisterForm;
