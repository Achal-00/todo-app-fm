import update from "immutability-helper";
import { useCallback, useContext } from "react";
import Card from "./Card";
import { dataContext } from "./MainSection";

export default function ListContainer() {
  const { cards, setCards, filterId } = useContext(dataContext);

  const moveCard = useCallback((dragIndex, hoverIndex) => {
    setCards((prevCards) =>
      update(prevCards, {
        $splice: [
          [dragIndex, 1],
          [hoverIndex, 0, prevCards[dragIndex]],
        ],
      })
    );
  }, []);

  const renderCard = useCallback((card, index) => {
    return (
      <Card
        key={card.id}
        index={index}
        id={card.id}
        text={card.text}
        moveCard={moveCard}
        status={card.status}
      />
    );
  }, []);

  return (
    <div className="w-full">
      {cards.map((card, i) => {
        if (filterId === 1) return renderCard(card, i);
        else if (filterId === 2) {
          if (!card.status) return renderCard(card, i);
        } else {
          if (card.status) return renderCard(card, i);
        }
      })}
    </div>
  );
}
