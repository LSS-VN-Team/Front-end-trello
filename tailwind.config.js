/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      width: {
        taskCardW: "777px",
      },
      height: {
        sigup: "550px",
        taskCardH: "999px"

      },
    },
  },
  plugins: [],
};
