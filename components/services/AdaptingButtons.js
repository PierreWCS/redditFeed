import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import NewReleasesIcon from "@material-ui/icons/NewReleases";

const classes = {
  popular: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    height: 48,
    width: "150px",
    padding: "0 30px",
    margin: 8,
    outline: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    cursor: "pointer",
  },
  new: {
    background: "linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(33, 203, 243, .3)",
    color: "white",
    height: 48,
    width: "150px",
    padding: "0 30px",
    margin: 8,
    outline: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    cursor: "pointer",
  },
  default: {
    background: "white",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 2px 3px 1px rgba(150,150,150, .6)",
    color: "grey",
    height: 48,
    width: "150px",
    padding: "0 30px",
    margin: 8,
    outline: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    cursor: "pointer",
  },
};

export default function MyButton(props) {
  const { color, text, status, icon, buttonType, setContent } = props;

  if (buttonType === "popular") {
    return (
      <button
        onClick={() => setContent("popular")}
        style={status === "selected" ? classes.popular : classes.default}
      >
        <WhatshotIcon />
        Popular
      </button>
    );
  } else if (buttonType === "new") {
    return (
      <button
        onClick={() => setContent("new")}
        style={status === "selected" ? classes.new : classes.default}
      >
        <NewReleasesIcon />
        New
      </button>
    );
  }
}
