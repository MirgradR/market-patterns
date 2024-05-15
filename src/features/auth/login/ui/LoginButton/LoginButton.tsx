import { authService } from "@/entities/auth/api/authService";
import Button from "@/shared/ui/Button/Button";

const LoginButton = () => {
  const loginHandler = authService("login");
  return (
    <>
      <Button type="primary" label="Sign In" onClick={loginHandler} />
    </>
  );
};

export default LoginButton;
