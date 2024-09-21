import { BannerProps } from "../../model/types";
import Banner from "./Banner";

interface AdaptedBannerProps {
  title: string;
  buttonLabel: string;
  price: string;
  onAction: () => void;
}

const AdaptedBanner = ({
  title,
  price,
  buttonLabel,
  onAction,
}: AdaptedBannerProps) => {
  const adaptedProps: BannerProps = {
    title,
    price,
    text: buttonLabel,
    onClick: onAction,
  };

  return <Banner {...adaptedProps} />;
};

export default AdaptedBanner;
