import { Field, OnSubmitFunction } from "@/shared/interfaces/types";
import Form from "@/shared/ui/Form/Form";
import { useRef } from "react";

type FormBuilder<T> = {
  addField: (
    name: string,
    label: string,
    type: "text" | "password" | "email"
  ) => FormBuilder<T>;
  makeRequired: () => FormBuilder<T>;
  setOnSubmit: (onSubmit: OnSubmitFunction<T>) => FormBuilder<T>;
  build: () => React.ReactElement;
  clearRefs: () => void;
};

export const useFormBuilder = <T extends Record<string, string>>() => {
  const fieldsRef = useRef<Field[]>([]);
  const onSubmitRef = useRef<OnSubmitFunction<T>>();

  const builder: FormBuilder<T> = {
    addField: (
      name: string,
      label: string,
      type: "text" | "password" | "email"
    ) => {
      fieldsRef.current.push({
        name,
        label,
        type,
        required: false,
        value: "",
      });
      return builder;
    },
    makeRequired: () => {
      const lastField = fieldsRef.current[fieldsRef.current.length - 1];

      if (lastField) {
        lastField.required = true;
      }

      return builder;
    },
    setOnSubmit: (onSubmit) => {
      onSubmitRef.current = onSubmit;
      return builder;
    },
    build: () => (
      <Form<T>
        fields={fieldsRef.current}
        onSubmitHandler={onSubmitRef.current}
      />
    ),
    clearRefs: () => {
      fieldsRef.current = [];
      onSubmitRef.current = undefined;
    },
  };

  return builder;
};
