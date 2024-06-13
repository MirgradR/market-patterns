import { useRef } from "react";
import Banner from "../ui/Banner/Banner";
import { BannerProps } from "../model/types";
import { useCurrencyStrategy } from "@/shared/utils/hooks/useCurrencyStrategy";

type BannerBuilder = {
  setTitle: (title: string) => BannerBuilder;
  setPrice: (price: number) => BannerBuilder;
  setButton: (text: string) => BannerBuilder;
  setOnClick: (onClick: () => void) => BannerBuilder;
  build: () => React.ReactElement;
  clearRefs: () => void;
};

export const useBannerBuilder = () => {
  const props = useRef<BannerProps>({} as BannerProps);
  const { currencyStrategy } = useCurrencyStrategy();

  const validateTitle = (title: string) => {
    if (title.length > 50) {
      throw new Error("Title is too long");
    }
    return title;
  };

  const formatPrice = (price: number) => {
    return `${currencyStrategy.strategy(price)}`;
  };

  const builder: BannerBuilder = {
    setTitle: (title: string) => {
      props.current.title = validateTitle(title);
      return builder;
    },
    setPrice: (price: number) => {
      props.current.price = formatPrice(price);
      return builder;
    },
    setButton: (text: string) => {
      props.current.text = text;
      return builder;
    },
    setOnClick: (onClick: () => void) => {
      props.current.onClick = onClick;
      return builder;
    },
    build: () => <Banner {...props.current} />,
    clearRefs: () => {
      props.current = {} as BannerProps;
    },
  };

  return builder;
};
