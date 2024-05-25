import { LoginForm } from "@/features/auth/login";
import styles from "./styles.module.css";

const LoginPage = () => {
  return (
    <main className={styles.login}>
      <h1 className={styles.title}>Login</h1>
      <LoginForm />
    </main>
  );
};

export default LoginPage;
