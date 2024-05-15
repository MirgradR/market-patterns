import Logo from "@/shared/ui/Logo/Logo";
import styles from "./styles.module.css";

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
      </nav>
    </header>
  );
};

export default Header;
