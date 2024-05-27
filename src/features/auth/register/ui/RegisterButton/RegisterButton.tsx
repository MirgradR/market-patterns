import { authService } from "@/entities/auth/api/authService";
import Button from "@/shared/ui/Button/Button";
import { useNavigate } from "react-router-dom";

const RegisterButton = () => {
  const navigate = useNavigate();
  const registerHandler = authService("register", navigate);
  return (
    <>
      <Button type="secondary" label="Sign Up" onClick={registerHandler} />
    </>
  );
};

export default RegisterButton;
