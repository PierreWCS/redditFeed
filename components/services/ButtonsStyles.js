export default {
  popular: {
    background: styledBy("color", {
      default: "lightgrey",
      selected: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    }),
    borderRadius: 3,
    border: 0,
    color: styledBy("color", {
      default: "grey",
      selected: "white",
    }),
    height: 40,
    width: 120,
    padding: "0 30px",
    boxShadow: styledBy("color", {
      default: "0 2px 3px 1px grey",
      selected: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    }),
    "&hover:": {
      backgroundColor: styledBy("color", {
        default: "lightgrey",
        selected: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
      }),
      color: styledBy("color", {
        default: "grey",
        selected: "white",
      }),
    },
  },
  new: {
    background: styledBy("color", {
      default: "lightgrey",
      selected: "linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)",
    }),
    borderRadius: 3,
    border: 0,
    color: styledBy("color", {
      default: "grey",
      selected: "white",
    }),
    height: 40,
    width: 120,
    padding: "0 30px",
    boxShadow: styledBy("color", {
      default: "0 2px 3px 1px grey",
      selected: "0 3px 5px 2px rgba(33, 203, 243, .3)",
    }),
    "&hover:": {
      backgroundColor: styledBy("color", {
        default: "grey",
        selected: "linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)",
      }),
      color: styledBy("color", {
        default: "grey",
        selected: "white",
      }),
    },
  },
};
