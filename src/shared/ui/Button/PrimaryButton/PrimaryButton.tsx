import { ButtonProps } from "../types";
import styles from "./styles.module.css";

const PrimaryButton = ({ label, onClick }: ButtonProps) => (
  <button className={styles.primaryButton} onClick={onClick}>
    <i className="fas fa-check"></i> {label}
  </button>
);

export default PrimaryButton;
