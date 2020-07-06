import React from "react";

const Footer = () => {
  return (
    <div style={classes.footerContainer}>
      <a
        style={classes.link}
        rel="noopener noreferrer"
        target="_blank"
        href="https://github.com/PierreWCS/feedReddit"
      >
        Code available here
      </a>
    </div>
  );
};

const classes = {
  footerContainer: {
    backgroundColor: "#EEEEEE",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "15vh",
    marginTop: "50px",
  },
  link: {
    color: "orange",
    letterSpacing: "1px",
    fontFamily: "roboto",
  },
};

export default Footer;
