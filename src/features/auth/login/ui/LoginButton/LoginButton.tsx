import { authService } from "@/entities/auth/api/authService";
import Button from "@/shared/ui/Button/Button";
import { useNavigate } from "react-router-dom";

const LoginButton = () => {
  const navigate = useNavigate();
  const loginHandler = authService("login", navigate);
  return (
    <>
      <Button type="primary" label="Sign In" onClick={loginHandler} />
    </>
  );
};

export default LoginButton;
