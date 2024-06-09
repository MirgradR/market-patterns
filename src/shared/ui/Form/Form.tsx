import { FormProps } from "@/shared/interfaces/types";
import styles from "./styles.module.css";

const Form = ({ fields, onSubmitHandler }: FormProps) => {
  return (
    <form onSubmit={onSubmitHandler} className={styles.form}>
      {fields.map((field, index) => (
        <div className={styles.block} key={index}>
          {field}
        </div>
      ))}
    </form>
  );
};
export default Form;
