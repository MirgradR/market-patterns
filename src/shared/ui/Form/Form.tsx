import { FormProps } from "@/shared/interfaces/types";
import { useForm, SubmitHandler, Path } from "react-hook-form";
import styles from "./styles.module.css";

const Form = <T extends Record<string, string>>({
  fields,
  onSubmitHandler,
}: FormProps<T>) => {
  const { register, handleSubmit } = useForm<T>();

  const onSubmit: SubmitHandler<T> = (data) => {
    if (onSubmitHandler) {
      onSubmitHandler(data);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      {fields.map((field) => (
        <div className={styles.block} key={field.name}>
          <input
            className={styles.input}
            placeholder={`${field.label}${field.required ? " *" : ""}`}
            {...register(field.name as Path<T>)}
            type={field.type}
          />
        </div>
      ))}
      <button className={styles.button} type="submit">
        Submit
      </button>
    </form>
  );
};
export default Form;
