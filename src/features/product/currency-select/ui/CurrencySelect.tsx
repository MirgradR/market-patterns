import React from "react";
import styles from "./styles.module.css";
import { currencyFormat } from "../utils/currencyFormat";
import { useCurrencyStrategy } from "@/shared/utils/hooks/useCurrencyStrategy";

const CurrencySelect: React.FC = () => {
  const { setCurrencyStrategy } = useCurrencyStrategy();

  const selectCurrencyStrategy = (value: string) => {
    if (value === "EUR") setCurrencyStrategy(currencyFormat.usdToEur);
    else if (value === "GBP") setCurrencyStrategy(currencyFormat.usdToGbp);
    else if (value === "JPY") setCurrencyStrategy(currencyFormat.usdToJpy);
    else setCurrencyStrategy(currencyFormat.usdToUsd);
  };

  return (
    <select
      className={styles.select}
      onChange={(e) => selectCurrencyStrategy(e.target.value)}
    >
      <option className={styles.option} value="USD">
        USD
      </option>
      <option className={styles.option} value="EUR">
        EUR
      </option>
      <option className={styles.option} value="GBP">
        GBP
      </option>
      <option className={styles.option} value="JPY">
        JPY
      </option>
    </select>
  );
};

export default CurrencySelect;
