import styles from "./styles.module.css";
import { LatestProducts } from "@/widgets/product";
import { useBannerBuilder } from "@/widgets/main/utils/bannerBuilder";
import DiscountBanner from "@/widgets/main/ui/Discount/DiscountBanner";

const MainPage = () => {
  const onClick = () => {
    console.log("Click");
  };

  const bannerBuilder = useBannerBuilder()
    .setTitle("Gold big hoops")
    .setPrice(199.99)
    .setButton("View product")
    .setOnClick(onClick);

  const Banner = bannerBuilder.build();
  bannerBuilder.clearRefs();

  return (
    <main className={styles.main}>
      {Banner}
      <DiscountBanner strategy={(amount: number) => amount * 1} amount={1000} />
      <LatestProducts />
    </main>
  );
};

export default MainPage;
