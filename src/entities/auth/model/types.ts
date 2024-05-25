import { SubmitHandler } from "react-hook-form";

export interface AuthFormValues {
  username?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
}

export interface AuthFormProps extends AuthFormValues {
  onSubmitHandler?: SubmitHandler<AuthFormValues>;
}
