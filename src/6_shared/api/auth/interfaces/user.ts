export interface LoginFormInputs {
  email: string;
  password: string;
}

export interface RegisterFormInputs {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface UserData {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
}
