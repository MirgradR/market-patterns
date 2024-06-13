import {
  CurrencyContext,
  CurrencyContextType,
} from "@/app/providers/CurrencyProvider";
import { useContext } from "react";

export const useCurrencyStrategy = (): CurrencyContextType => {
  const context = useContext(CurrencyContext);
  if (!context) {
    throw new Error(
      "useCurrencyStrategy must be used within a CurrencyProvider"
    );
  }
  return context;
};
