import Image from "next/image";
import styles from "./Card.module.css";

const Card = ({ image, title }) => {
  return (
    <div className={styles.container}>
      <Image
        src={image}
        alt='Avion'
        width={400}
        height={150}
        priority
      />
      <h3>{title}</h3>
      <button>Más</button>
    </div>
  );
};

export default Card;