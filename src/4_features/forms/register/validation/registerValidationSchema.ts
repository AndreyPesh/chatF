import * as yup from 'yup';

export const registerFormSchema = yup
  .object({
    firstName: yup
      .string()
      .min(5, 'Min length username is 5 characters')
      .required(),
    lastName: yup
      .string()
      .min(5, 'Min length username is 5 characters')
      .required(),
    email: yup
      .string()
      .min(5, 'Min length username is 5 characters')
      .required(),
    password: yup
      .string()
      .min(5, 'Min length password is 5 characters')
      .required(),
    repeatPassword: yup
      .string()
      .min(5, 'Min length password is 5 characters')
      .required(),
  })
  .required();
