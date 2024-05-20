import DangerButton from "./DangerButton/DangerButton";
import PrimaryButton from "./PrimaryButton/PrimaryButton";
import SecondaryButton from "./SecondaryButton/SecondaryButton";
import { ButtonProps } from "./types";

interface Props extends ButtonProps {
  type: "primary" | "secondary" | "danger";
}

const Button = ({ type, label, onClick }: Props) => {
  switch (type) {
    case "primary":
      return <PrimaryButton label={label} onClick={onClick} />;
    case "secondary":
      return <SecondaryButton label={label} onClick={onClick} />;
    case "danger":
      return <DangerButton label={label} onClick={onClick} />;
    default:
      return null;
  }
};

export default Button;
