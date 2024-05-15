import { images } from "@/shared/assets";
import styles from "./styles.module.css";

const Banner = () => {
  return (
    <section className={styles.wrapper}>
      <img src={images.banner} alt="banner" className={styles.image} />
    </section>
  );
};

export default Banner;
