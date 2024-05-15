import { ButtonProps } from "../types";
import styles from "./styles.module.css";

const SecondaryButton = ({ label, onClick }: ButtonProps) => (
  <button className={styles.secondaryButton} onClick={onClick}>
    <span className={styles.labelSpan}>{label}</span>
  </button>
);

export default SecondaryButton;
