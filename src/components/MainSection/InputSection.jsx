import { useContext, useState } from "react";
import { dataContext } from "./MainSection";

export default function InputSection() {
  const { cards, setCards } = useContext(dataContext);
  const [item, setItem] = useState("");

  async function submitHandler() {
    if (item !== "") {
      if (cards.length === 0) {
        await setCards([...cards, { id: 1, text: item, status: false }]);
        setItem("");
        document.querySelector(".item-input").value = "";
      } else {
        await setCards([
          ...cards,
          { id: cards[cards.length - 1].id + 1, text: item, status: false },
        ]);
        setItem("");
        document.querySelector(".item-input").value = "";
      }
    }
  }

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <div className="bg-lt-very-light-grey dark:bg-dt-other-very-dark-greyish-blue p-4 rounded-md flex items-center gap-4">
        <button
          type="submit"
          onClick={submitHandler}
          className="border border-lt-dark-greyish-blue dark:border-dt-very-dark-greyish-blue w-5 h-5 rounded-full"
        ></button>
        <input
          type="text"
          placeholder="Create a new todo..."
          className="item-input w-full outline-none bg-lt-very-light-grey dark:bg-dt-other-very-dark-greyish-blue text-lt-very-dark-greyish-blue dark:text-dt-light-greyish-blue-hover"
          onChange={(e) => setItem(e.currentTarget.value)}
        />
      </div>
    </form>
  );
}
