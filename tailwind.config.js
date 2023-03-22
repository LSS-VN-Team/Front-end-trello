/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      width: {
        sidebar: "26%",
        viewpost: "33%",
        rightitem: "29%",
      },
      height: {
        sigup: "550px"
      },
    },
  },
  plugins: [],
};
