import { CurrencyStrategy } from "@/features/product/currency-select/utils/currencyFormat";
import { ReactElement, createContext, useState } from "react";

export interface CurrencyContextType {
  currencyStrategy: CurrencyStrategy;
  setCurrencyStrategy: (strategy: (price: number) => string) => void;
}

export const CurrencyContext = createContext<CurrencyContextType | undefined>(
  undefined
);

export const CurrencyProvider = ({ children }: { children: ReactElement }) => {
  const [currencyStrategy, setCurrencyStrategy] = useState<CurrencyStrategy>({
    formatPrice: (price: number) => price + " USD",
  });

  const changeStrategy = (strategy: (price: number) => string) => {
    setCurrencyStrategy({ formatPrice: strategy });
  };

  return (
    <CurrencyContext.Provider
      value={{ currencyStrategy, setCurrencyStrategy: changeStrategy }}
    >
      {children}
    </CurrencyContext.Provider>
  );
};
