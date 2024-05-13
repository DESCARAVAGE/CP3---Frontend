/** @type {import('tailwindcss').Config} */

const colors = {
  gray: {
    1: "#0A0A0A",
    10: "#1F1F1F",
    20: "#3D3D3D",
    30: "#474747",
    40: "#666666",
    50: "#999999",
    60: "#A3A3A3",
    70: "#C2C2C2",
    80: "#D6D6D6",
    90: "#EBEBEB",
    100: "#F5F5F5",
  },
  pink: {
    10: "#e81c52",
    20: "#e8416e",
    30: "#e887a1",
  },
  blue: {
    1: "#3E878E",
    10: "#4BA2AA",
    20: "#53ABB3",
    30: "#63B3BB",
    40: "#7FC1C7",
    50: "#8EC8CD",
    60: "#AAD6DA",
    70: "#B8DDE0",
    80: "#C6E3E6",
    90: "#D4EAEC",
    100: "#E3F1F3",
  },
  orange: {
    40: "#EE9A6D",
    90: "#F9D9C8",
    100: "#FDF2ED",
  },
};


module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      poppins: ["Poppins"],
    },
    colors: {
      primary: colors["pink"],
      secondary: colors["blue"],
      thirdly: colors["orange"],
    },
    extend: {},
  },
  plugins: [],
}

