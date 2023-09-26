/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      screens: {
        portrait: { raw: "(max-aspect-ratio: 3/2)" },
        landscape: { raw: "(min-aspect-ratio: 3/2)" },
      },
      fontFamily: {
        "custom-font-family": ["Josefin Sans", "sans-serif"],
      },
      colors: {
        "primary-bright-blue": "hsl(220, 98%, 61%)",
        "check-bg-from": "hsl(192, 100%, 67%)",
        "check-bg-to": "hsl(280, 87%, 65%)",
        "lt-very-light-grey": "hsl(0, 0%, 98%)",
        "lt-very-light-greyish-blue": "hsl(236, 33%, 92%)",
        "lt-greyish-blue": "hsl(233, 11%, 84%)",
        "lt-dark-greyish-blue": "hsl(236, 9%, 61%)",
        "lt-very-dark-greyish-blue": "hsl(235, 19%, 35%)",
        "dt-very-dark-blue": "hsl(235, 21%, 11%)",
        "dt-very-dark-desaturated-blue": "hsl(235, 24%, 19%)",
        "dt-light-greyish-blue": "hsl(234, 39%, 85%)",
        "dt-light-greyish-blue-hover": "hsl(236, 33%, 92%)",
        "dt-dark-greyish-blue": "hsl(234, 11%, 52%)",
        "dt-very-dark-greyish-blue": "hsl(233, 14%, 35%)",
        "dt-other-very-dark-greyish-blue": "hsl(237, 14%, 26%)",
      },
    },
  },
  plugins: [],
};
