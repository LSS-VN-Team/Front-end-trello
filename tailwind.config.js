/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navbar: "rgb(2 106 167)",
        hover: "rgba(0, 0, 0, 0.2)",
        buttonnav: "rgba(0, 0, 0, 0.3)",
        buttonnavhover: "rgba(255, 255, 255, 0.2)",
        homeitemlefthover: "rgba(9, 30, 66, 0.08)",
        icoinT: "#403294",
        textcolor: "rgba(9, 30, 66, 0.66)",
        colorrightbtn: "#091e420a",
        colorrightbtnhover: "#091e4214",
        upbtnicon:"#89609E",
        upbtn: "#EDDBF4",
        upbtnhover:"#DFC0EB",
      },
      width: {
        homeitemleft: "14.3%",
      },
      boxShadow: {
        boxsd: "0 0 10px 2px rgb(0 0 0 / 0.1)",
      },
      gridTemplateColumns: { 
        '16': '12px 1fr 12px',
      },
      margin: {
        '84': '362px',
      },
    },
  },
  plugins: [],
};
