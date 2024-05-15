import { images } from "@/shared/assets";
import styles from "./styles.module.css";
import Button from "@/shared/ui/Button/Button";

const Banner = () => {
  return (
    <section className={styles.wrapper}>
      <img src={images.banner} alt="banner" className={styles.image} />
      <Button type="danger" label="Sales" onClick={() => null} />
    </section>
  );
};

export default Banner;
