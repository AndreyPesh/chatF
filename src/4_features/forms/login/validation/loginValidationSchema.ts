import * as yup from 'yup';

export const loginFormSchema = yup
  .object({
    email: yup
      .string()
      .min(5, 'Min length username is 5 characters')
      .required(),
    password: yup
      .string()
      .min(5, 'Min length password is 5 characters')
      .required(),
  })
  .required();
