import { authService } from "@/entities/auth/api/authService";
import Button from "@/shared/ui/Button/Button";

const RegisterButton = () => {
  const registerHandler = authService("register");
  return (
    <>
      <Button type="secondary" label="Sign Up" onClick={registerHandler} />
    </>
  );
};

export default RegisterButton;
