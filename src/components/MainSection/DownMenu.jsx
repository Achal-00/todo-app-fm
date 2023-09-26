import { useContext } from "react";
import { dataContext } from "./MainSection";

export default function DownMenu() {
  const { filterId, setFilterId } = useContext(dataContext);

  return (
    <div className="flex gap-4 text-sm text-lt-dark-greyish-blue dark:text-dt-dark-greyish-blue bg-lt-very-light-grey dark:bg-dt-other-very-dark-greyish-blue p-4 rounded-md justify-center landscape:lg:hidden">
      <button
        className={`${filterId === 1 && "text-primary-bright-blue"}`}
        onClick={() => setFilterId(1)}
      >
        All
      </button>
      <button
        onClick={() => setFilterId(2)}
        className={`${filterId === 2 && "text-primary-bright-blue"}`}
      >
        Active
      </button>
      <button
        onClick={() => setFilterId(3)}
        className={`${filterId === 3 && "text-primary-bright-blue"}`}
      >
        Completed
      </button>
    </div>
  );
}
