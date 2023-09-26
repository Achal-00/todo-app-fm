import { useEffect, useState } from "react";

export default function Header() {
  const [themeSwitcher, setThemeSwitcher] = useState(false);

  useEffect(() => {
    if (themeSwitcher) {
      document.querySelector(".main-container").classList.add("dark");
      document.querySelector(".theme-logo").src = "icon-sun.svg";
    } else {
      document.querySelector(".main-container").classList.remove("dark");
      document.querySelector(".theme-logo").src = "icon-moon.svg";
    }
  }, [themeSwitcher]);

  return (
    <div className="flex items-center justify-between pb-8">
      <h1 className="font-bold text-3xl tracking-[0.3em] text-lt-very-light-grey">
        TODO
      </h1>
      <img
        src="icon-moon.svg"
        alt=""
        onClick={() => setThemeSwitcher((prev) => !prev)}
        className="theme-logo landscape:lg:hover:cursor-pointer"
      />
    </div>
  );
}
