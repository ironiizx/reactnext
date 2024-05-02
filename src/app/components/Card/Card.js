import Image from "next/image";
import styles from "./Card.module.css"

const Card = (props) =>{
    const { image,title,description } = props;
    return(
        <div className={styles["container"]}>
            <Image
             src={image}
             alt='Next.js Logo'
             width={1900}
             height={800}
             priority
             />
            <h3>{title}</h3>
            <p>{description}</p>
            <button>Más</button>
        </div>

    );
};

export default Card;