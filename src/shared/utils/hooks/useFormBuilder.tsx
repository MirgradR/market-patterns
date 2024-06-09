import React, { useRef, ReactElement, FormEventHandler } from "react";
import { useForm, Path } from "react-hook-form";
import styles from "../../ui/Form/styles.module.css";
import Form from "@/shared/ui/Form/Form";

type FieldType = "text" | "password" | "email";

type OnSubmitFunction<T> = (data: T) => void;

type FormBuilder<T> = {
  addField: (name: string, label: string, type: FieldType) => FormBuilder<T>;
  makeRequired: () => FormBuilder<T>;
  addButton: (label: string) => FormBuilder<T>;
  setOnSubmit: (onSubmit: OnSubmitFunction<T>) => FormBuilder<T>;
  build: () => ReactElement;
  clearRefs: () => void;
};

export const useFormBuilder = <T extends Record<string, string>>() => {
  const fieldsRef = useRef<ReactElement[]>([]);
  const onSubmitRef = useRef<FormEventHandler<HTMLFormElement>>();
  const { register, handleSubmit } = useForm<T>();

  const builder: FormBuilder<T> = {
    addField: (name: string, label: string, type: FieldType) => {
      const fieldElement = (
        <input
          key={name}
          className={styles.input}
          placeholder={label}
          {...register(name as Path<T>)}
          type={type}
        />
      );

      fieldsRef.current.push(fieldElement);
      return builder;
    },
    makeRequired: () => {
      const lastFieldIndex = fieldsRef.current.length - 1;
      const lastField = fieldsRef.current[lastFieldIndex];

      if (lastField) {
        fieldsRef.current[lastFieldIndex] = React.cloneElement(lastField, {
          required: true,
          placeholder: `${lastField.props.placeholder} *`,
        });
      }

      return builder;
    },
    addButton: (label: string) => {
      const buttonElement = (
        <button key={label} className={styles.button} type="submit">
          {label}
        </button>
      );

      fieldsRef.current.push(buttonElement);
      return builder;
    },
    setOnSubmit: (onSubmit) => {
      onSubmitRef.current = handleSubmit(onSubmit);
      return builder;
    },
    build: () => (
      <Form fields={fieldsRef.current} onSubmitHandler={onSubmitRef.current} />
    ),
    clearRefs: () => {
      fieldsRef.current = [];
      onSubmitRef.current = undefined;
    },
  };

  return builder;
};
