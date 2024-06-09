import { useFormBuilder } from "@/shared/utils/hooks/useFormBuilder";
import { OnSubmitFunction, RegisterFormData } from "@/shared/interfaces/types";

const RegisterForm = () => {
  const onSubmit: OnSubmitFunction<RegisterFormData> = (data) => {
    console.log("Form submitted with data:", data);
  };

  const formBuilder = useFormBuilder<RegisterFormData>()
    .addField("username", "Username", "text")
    .makeRequired()
    .addField("email", "Email", "email")
    .addField("password", "Password", "password")
    .addField("confirmPassword", "Confirm Password", "password")
    .addButton("Submit")
    .setOnSubmit(onSubmit);

  const Form = formBuilder.build();
  formBuilder.clearRefs();

  return Form;
};

export default RegisterForm;
