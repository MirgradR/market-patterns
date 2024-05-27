export type RegisterFormData = {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export type LoginFormData = {
  email: string;
  password: string;
};

export type OnSubmitFunction<T> = (data: T) => void;

export type Field = {
  name: string;
  label: string;
  type: "text" | "password" | "email";
  required: boolean;
  value: string;
};

export type FormProps<T> = {
  fields: Field[];
  onSubmitHandler?: OnSubmitFunction<T>;
};
