import { useFormBuilder } from "@/shared/utils/hooks/useFormBuilder";
import { LoginFormData, OnSubmitFunction } from "@/shared/interfaces/types";

const LoginForm = () => {
  const onSubmit: OnSubmitFunction<LoginFormData> = (data) => {
    console.log("Form submitted with data:", data);
  };

  const formBuilder = useFormBuilder<LoginFormData>()
    .addField("email", "Email", "email")
    .addField("password", "Password", "password")
    .addButton("Submit")
    .setOnSubmit(onSubmit);

  const Form = formBuilder.build();
  formBuilder.clearRefs();

  return Form;
};

export default LoginForm;
