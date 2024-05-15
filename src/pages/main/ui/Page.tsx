import { Banner } from "@/widgets/main";
import styles from "./styles.module.css";
import { LatestProducts } from "@/widgets/product";

const MainPage = () => {
  return (
    <main className={styles.main}>
      <Banner />

      <LatestProducts />
    </main>
  );
};

export default MainPage;
