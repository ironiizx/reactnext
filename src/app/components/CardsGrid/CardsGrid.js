import Card from "../Card/Card";
import styles from "./CardsGrid.module.css";

const CardsGrid = ({ cards }) => {
  return (
    <div className={`${styles.container} grid`}>
        {cards.map((card, index) => (
          <div key={index} className={'col_4 col_mb_12'}>
            <Card
              title={card.title}
              image={card.image}
              description={card.description}
            />
          </div>
        ))}
      </div>
  );
};

export default CardsGrid;