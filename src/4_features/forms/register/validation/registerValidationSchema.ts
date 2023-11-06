import * as yup from 'yup';

export const registerFormSchema = yup
  .object({
    firstName: yup
      .string()
      .min(5, 'Min length first name is 5 characters')
      .required(),
    lastName: yup
      .string()
      .min(5, 'Min length last name is 5 characters')
      .required(),
    email: yup.string().email('Incorrect email address').required(),
    password: yup
      .string()
      .min(5, 'Min length password is 5 characters')
      .required(),
    confirmPassword: yup
      .string()
      .min(5, 'Min length password is 5 characters')
      .required()
      .oneOf([yup.ref('password')], 'Passwords must match'),
  })
  .required();
