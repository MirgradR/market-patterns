import { useState } from "react";
import styles from "./styles.module.css";
import { ButtonProps } from "../types";

const DangerButton = ({ label, onClick }: ButtonProps) => {
  const [hover, setHover] = useState(false);

  return (
    <button
      className={styles.dangerButton}
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {label}
      {hover && (
        <div className={styles.warningPopup}>Warning: Dangerous action!</div>
      )}
    </button>
  );
};

export default DangerButton;
