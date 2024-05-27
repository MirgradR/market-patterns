import { RegisterForm } from "@/features/auth/register";
import styles from "./styles.module.css";

const RegisterPage = () => {
  return (
    <main className={styles.register}>
      <h1 className={styles.title}>Register</h1>
      <RegisterForm />
    </main>
  );
};

export default RegisterPage;
