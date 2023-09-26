import { useContext, useRef } from "react";
import { useDrag, useDrop } from "react-dnd";
import { ItemTypes } from "./Itemtypes";
import { dataContext } from "./MainSection";

export default function Card({ id, text, index, moveCard, status }) {
  const { cards, setCards } = useContext(dataContext);

  const ref = useRef(null);
  const [{ handlerId }, drop] = useDrop({
    accept: ItemTypes.CARD,
    collect(monitor) {
      return {
        handlerId: monitor.getHandlerId(),
      };
    },
    hover(item, monitor) {
      if (!ref.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = index;
      if (dragIndex === hoverIndex) {
        return;
      }
      const hoverBoundingRect = ref.current?.getBoundingClientRect();
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      const clientOffset = monitor.getClientOffset();
      const hoverClientY = clientOffset.y - hoverBoundingRect.top;
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }
      moveCard(dragIndex, hoverIndex);
      item.index = hoverIndex;
    },
  });
  const [{ isDragging }, drag] = useDrag({
    type: ItemTypes.CARD,
    item: () => {
      return { id, index };
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });
  const opacity = isDragging ? 0 : 1;
  drag(drop(ref));

  return (
    <div
      ref={ref}
      data-handler-id={handlerId}
      className="grid grid-cols-[0.1fr_0.8fr_0.1fr] p-4 border-b border-lt-dark-greyish-blue dark:border-dt-very-dark-greyish-blue"
    >
      <button
        className={`w-5 h-5 rounded-full grid content-center justify-items-center ${
          status
            ? "bg-gradient-to-br from-check-bg-from to-check-bg-to"
            : "border border-lt-dark-greyish-blue"
        }`}
        onClick={(e) => {
          cards.map((x) => {
            if (Object.values(x).includes(id)) {
              const arr = cards;
              arr[arr.indexOf(x)].status = true;
              setCards([...arr]);
            }
          });
        }}
      >
        <img
          src="icon-check.svg"
          alt=""
          className={`${status ? "block" : "hidden"}`}
        />
      </button>
      <p
        className={`${
          status
            ? "line-through text-lt-dark-greyish-blue dark:text-dt-dark-greyish-blue"
            : "text-lt-very-dark-greyish-blue dark:text-dt-light-greyish-blue"
        }`}
      >
        {text}
      </p>
      <img
        src="icon-cross.svg"
        alt=""
        className="self-center justify-self-center hover:cursor-pointer"
        onClick={() => {
          cards.map((x) => {
            if (Object.values(x).includes(id)) {
              const arr = cards;
              arr.splice(cards.indexOf(x), 1);
              setCards([...arr]);
            }
          });
        }}
      />
    </div>
  );
}
