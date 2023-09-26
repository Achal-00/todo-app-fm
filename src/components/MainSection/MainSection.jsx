import { createContext, useEffect, useState } from "react";
import ContentSection from "./ContentSection";
import DownMenu from "./DownMenu";
import Footer from "./Footer";
import Header from "./Header";
import InputSection from "./InputSection";

export const dataContext = createContext();
export const filterContext = createContext();

export default function MainSection() {
  const [cards, setCards] = useState([]);
  const [filterId, setFilterId] = useState(1);
  const [initialLoad, setInitialLoad] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("todo-data") === null)
      localStorage.setItem("todo-data", JSON.stringify(cards));
    else setCards(JSON.parse(localStorage.getItem("todo-data")));
    setInitialLoad(true);
  }, []);

  useEffect(() => {
    if (initialLoad) localStorage.setItem("todo-data", JSON.stringify(cards));
  }, [cards]);

  return (
    <section className="col-start-1 col-end-2 row-start-1 row-end-3 self-start portrait:m-[5%] grid gap-4 landscape:lg:w-1/2 landscape:lg:mx-auto landscape:lg:my-[5%]">
      <dataContext.Provider value={{ cards, setCards, filterId, setFilterId }}>
        <Header />
        <InputSection />
        {cards.length > 0 && <ContentSection />}
        {cards.length > 0 && <DownMenu />}
        {cards.length > 0 && <Footer />}
      </dataContext.Provider>
    </section>
  );
}
