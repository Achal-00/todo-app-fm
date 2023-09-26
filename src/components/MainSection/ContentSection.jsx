import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import ListContainer from "./ListContainer";
import { useContext, useEffect, useState } from "react";
import { dataContext } from "./MainSection";

export default function ContentSection() {
  const { cards, setCards, filterId, setFilterId } = useContext(dataContext);
  const [count, setCount] = useState();

  function clearHandler() {
    const arr = [];
    cards.map((x) => {
      if (!Object.values(x).includes(true)) {
        arr.push(x);
      }
    });
    setCards([...arr]);
  }

  useEffect(() => {
    setCount(cards.length);
    cards.forEach((element) => {
      if (Object.values(element).includes(true)) setCount((prev) => prev - 1);
    });
  }, [cards]);

  return (
    <div className="bg-lt-very-light-grey dark:bg-dt-other-very-dark-greyish-blue grid rounded-md">
      <DndProvider backend={HTML5Backend}>
        <ListContainer />
      </DndProvider>
      <div className="items-center justify-between p-4 hidden landscape:lg:flex">
        <p className="text-sm text-lt-dark-greyish-blue dark:text-dt-dark-greyish-blue">
          {count} items left
        </p>
        <div className="flex gap-4 text-sm text-lt-dark-greyish-blue dark:text-dt-dark-greyish-blue">
          <button
            className={`${
              filterId === 1
                ? "text-primary-bright-blue"
                : "landscape:lg:hover:text-lt-very-dark-greyish-blue landscape:lg:dark:hover:text-dt-light-greyish-blue-hover"
            }`}
            onClick={() => setFilterId(1)}
          >
            All
          </button>
          <button
            onClick={() => setFilterId(2)}
            className={`${
              filterId === 2
                ? "text-primary-bright-blue"
                : "landscape:lg:hover:text-lt-very-dark-greyish-blue landscape:lg:dark:hover:text-dt-light-greyish-blue-hover"
            }`}
          >
            Active
          </button>
          <button
            onClick={() => setFilterId(3)}
            className={`${
              filterId === 3
                ? "text-primary-bright-blue"
                : "landscape:lg:hover:text-lt-very-dark-greyish-blue landscape:lg:dark:hover:text-dt-light-greyish-blue-hover"
            }`}
          >
            Completed
          </button>
        </div>
        <button
          className="text-sm text-lt-dark-greyish-blue dark:text-dt-dark-greyish-blue landscape:lg:hover:text-lt-very-dark-greyish-blue landscape:lg:dark:hover:text-dt-light-greyish-blue-hover"
          onClick={clearHandler}
        >
          Clear Completed
        </button>
      </div>
      <div className="flex justify-between text-sm text-lt-dark-greyish-blue dark:text-dt-dark-greyish-blue p-4 landscape:lg:hidden">
        <p>{count} items left</p>
        <button onClick={clearHandler}>Clear Completed</button>
      </div>
    </div>
  );
}
