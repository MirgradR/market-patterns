import Logo from "@/shared/ui/Logo/Logo";
import styles from "./styles.module.css";
import Button from "@/shared/ui/Button/Button";

const Header = () => {
  return (
    <header className={styles.header}>
      <Logo />

      <nav className={styles.navigation}>
        <ul className={styles.navigationList}>
          <li>
            <a href="#">Shop</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
          <li>
            <a href="#">Our Story</a>
          </li>
        </ul>

        <div className={styles.buttons}>
          <Button type="primary" label="Sign In" onClick={() => null} />
          <Button type="secondary" label="Sign Up" onClick={() => null} />
        </div>
      </nav>
    </header>
  );
};

export default Header;
