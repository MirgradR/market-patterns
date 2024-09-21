import styles from "./styles.module.css";
import { LatestProducts } from "@/widgets/product";
import DiscountBanner from "@/widgets/main/ui/Discount/DiscountBanner";
import { AdaptedBanner, Banner } from "@/widgets/main";

const MainPage = () => {
  const onClick = () => {
    console.log("Click");
  };

  return (
    <main className={styles.main}>
      <Banner
        onClick={onClick}
        text="View product"
        price="199.99"
        title="Gold big hoops"
      />
      <AdaptedBanner
        onAction={onClick}
        buttonLabel="View product"
        price="199.99"
        title="Gold big hoops"
      />
      <DiscountBanner strategy={(amount: number) => amount * 1} amount={1000} />
      <LatestProducts />
    </main>
  );
};

export default MainPage;
