export interface CurrencyStrategy {
  strategy: (price: number) => string;
}

export const currencyFormat = {
  usdToEur: (price: number) => +(price * 0.85).toFixed(2) + " EUR",
  usdToGbp: (price: number) => +(price * 0.75).toFixed(2) + " GBP",
  usdToJpy: (price: number) => +(price * 1.1).toFixed(2) + " JPY",
  usdToUsd: (price: number) => +(price * 1).toFixed(2) + " USD",
};
