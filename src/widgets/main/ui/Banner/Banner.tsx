import { images } from "@/shared/assets";
import styles from "./styles.module.css";
import { BannerProps } from "../../model/types";

const Banner = ({ title, text, price, onClick }: BannerProps) => {
  return (
    <section className={styles.wrapper}>
      <img src={images.banner} alt="banner" className={styles.image} />
      {title ? <h3 className={styles.title}>{title}</h3> : null}
      {price ? <h3 className={styles.price}>{price}</h3> : null}
      {text ? (
        <button className={styles.button} onClick={onClick}>
          {text}
        </button>
      ) : null}
    </section>
  );
};

export default Banner;
