import React, { useState } from "react";
import styles from "./styles.module.css";
import { useValidation } from "@/shared/utils/hooks/useValidation";
import {
  nameValidation,
  descriptionValidation,
  priceValidation,
} from "../../utils/validationStrategies";

const CreateProductForm = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  // Используем хук с различными стратегиями
  const nameValidator = useValidation(nameValidation);
  const descriptionValidator = useValidation(descriptionValidation);
  const priceValidator = useValidation(priceValidation);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const nameError = nameValidator.validate(name);
    const descriptionError = descriptionValidator.validate(description);
    const priceError = priceValidator.validate(price);

    if (!nameError && !descriptionError && !priceError) {
      // Все поля валидны, можно отправлять данные
      console.log("Product submitted successfully");
      console.log({ name, description, price });
    }
  };

  return (
    <div className={styles.wrapper}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.block}>
          <input
            type="text"
            placeholder="Product Name"
            value={name}
            className={styles.input}
            onChange={(e) => setName(e.target.value)}
            onBlur={() => nameValidator.validate(name)}
          />
          {nameValidator.error && (
            <span className={styles.error}>{nameValidator.error}</span>
          )}
        </div>
        <div className={styles.block}>
          <input
            type="text"
            placeholder="Product Description"
            value={description}
            className={styles.input}
            onChange={(e) => setDescription(e.target.value)}
            onBlur={() => descriptionValidator.validate(description)}
          />
          {descriptionValidator.error && (
            <span className={styles.error}>{descriptionValidator.error}</span>
          )}
        </div>
        <div className={styles.block}>
          <input
            type="number"
            placeholder="Price"
            value={price}
            className={styles.input}
            onChange={(e) => setPrice(e.target.value)}
            onBlur={() => priceValidator.validate(price)}
          />
          {priceValidator.error && (
            <span className={styles.error}>{priceValidator.error}</span>
          )}
        </div>
        <button className={styles.button} type="submit">
          Add product
        </button>
      </form>
    </div>
  );
};

export default CreateProductForm;
