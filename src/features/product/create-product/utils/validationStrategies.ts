// Стратегии валидации
export const nameValidation = (value: string) => {
  return value.trim() ? null : "Product name cannot be empty";
};

export const descriptionValidation = (value: string) => {
  return value.trim() ? null : "Product description cannot be empty";
};

export const priceValidation = (value: string) => {
  const price = parseFloat(value);
  return price > 0 ? null : "Price must be greater than 0";
};
