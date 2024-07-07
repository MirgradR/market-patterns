import { useState } from "react";

type ValidationStrategy = (value: string) => string | null;

export const useValidation = (strategy: ValidationStrategy) => {
  const [error, setError] = useState<string | null>(null);

  const validate = (value: string) => {
    const validationResult = strategy(value);
    setError(validationResult);
    return validationResult;
  };

  return { error, validate };
};
