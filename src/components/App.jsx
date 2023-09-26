import React from "react";
import HeroImage from "./HeroImage/HeroImage";
import MainSection from "./MainSection/MainSection";

export default function App() {
  return (
    <div className="font-custom-font-family min-h-[100dvh] grid grid-rows-[0.1fr_1fr] main-container">
      <HeroImage />
      <div className="bg-lt-very-light-greyish-blue dark:bg-dt-very-dark-desaturated-blue col-start-1 col-end-2 row-start-2 row-end-3"></div>
      <MainSection />
    </div>
  );
}
