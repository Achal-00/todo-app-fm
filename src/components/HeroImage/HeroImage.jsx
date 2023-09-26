export default function HeroImage() {
  return (
    <section className="col-start-1 col-end-2 row-start-1 row-end-2">
      <img
        src="bg-mobile-light.jpg"
        alt=""
        className="w-full landscape:hidden dark:hidden"
      />
      <img
        src="bg-mobile-dark.jpg"
        alt=""
        className="w-full hidden landscape:hidden portrait:dark:block"
      />
      <img
        src="bg-desktop-light.jpg"
        alt=""
        className="w-full portrait:hidden dark:hidden"
      />
      <img
        src="bg-desktop-dark.jpg"
        alt=""
        className="w-full hidden portrait:hidden landscape:dark:block"
      />
    </section>
  );
}
