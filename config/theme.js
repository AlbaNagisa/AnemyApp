const theme = {
  light: {
    theme: "light",
    color: "#222",
    backgroundColor: "#fff",
    placeHolderColor: "rgba(31,38,49, 0.8)",
    gradient: ["transparent", "#fff"],
    textInput: { background: "rgba(153, 153, 153, 0.3)", text: "#222" },
    colors: { background: "#fff", text: "#222" },
    animeCard: {
      background: "rgba(31,38,49,0.7)",
    },
    drawer: {
      backgroundColor: "rgba(255,255,255, 0.8)",
      activeBackgroundColor: "rgba(153, 153, 153, 0.7)",
    },
    header: {
      backgroundColor: "rgba(31,38,49, 0.8)",
    },
  },
  dark: {
    theme: "dark",
    color: "#fff",
    backgroundColor: "rgba(31,38,49,1)",
    placeHolderColor: "rgba(255,255,255, 0.8)",
    gradient: ["transparent", "rgba(31,38,49,1)"],
    textInput: { background: "rgba(42,48,65,1)", text: "#fff" },
    colors: { background: "rgba(42,48,65,1)", text: "#fff" },

    animeCard: {
      background: "rgba(31,38,49,0.7)",
    },
    drawer: {
      backgroundColor: "rgba(31,38,49,0.8)",
      activeBackgroundColor: "rgba(140, 140, 140, 0.1)",
    },
    header: {
      backgroundColor: "rgba(31,38,49, 0.8)",
    },
  },
  xmas: {
    theme: "xmas",
    color: "white",
    backgroundColor: "red",
    gradient: ["transparent", "red"],
    colors: { background: "red", text: "#fff" },
    animeCard: {
      background: "rgba(255,255,255,0.1)",
    },
  },
};

export default theme;
