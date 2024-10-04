import Logo from "@/shared/ui/Logo/Logo";
import styles from "./styles.module.css";
import { LoginButton } from "@/features/auth/login";
import { RegisterButton } from "@/features/auth/register";
import CurrencySelect from "@/features/product/currency-select/ui/CurrencySelect";
import { useReactifyStore } from "@/shared/utils/hooks/useReactifyStore";
import { productStore } from "@/entities/products/model/productStore";

const Header = () => {
  const [products] = useReactifyStore(productStore);
  console.log(products);
  console.log("---render header");
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

        <CurrencySelect />

        <div className={styles.buttons}>
          <LoginButton />
          <RegisterButton />
        </div>
      </nav>
    </header>
  );
};

export default Header;
