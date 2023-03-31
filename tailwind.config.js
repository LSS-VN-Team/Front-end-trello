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
        upbtnicon: "#89609E",
        upbtn: "#EDDBF4",
        upbtnhover: "#DFC0EB",
        rolehover: "#E4F0F6",
        rolecolor: " #172b4d",
        sidebarhover: "hsla(0, 0%, 100%, 0.16)",
        sidebarfocus: "#FFFFFF",
        buttontask: "#DFE1E6",
        card: "#ebecf0",
        cardbtn: "#091e4214",
        submitadd: "#0079bf",
      },
      spacing: {
        sidebar: "212%",
      },
      width: {
        homeitemleft: "14.3%",
        sidebar: "13.545%",
        taskboard: "86.455%",
        taskCardW: "777px",
        card: "260px",
      },
      height: {
        navbar: "5%",
        sidebar: "95%",
        sigup: "550px",
        taskCardH: "990px"
      },
      boxShadow: {
        inputsd: "0 1px 0 #091e4240",
        boxsd: "0 0 10px 2px rgb(0 0 0 / 0.1)",
      },
      gridTemplateColumns: {
        16: "12px 1fr 12px",
      },
      margin: {
        84: "362px",
      },
      borderWidth: {
        0.5: "0.1px",
      },
      borderRadius:{
        "df":"4px"
      }
    },
  },
  plugins: [],
};
