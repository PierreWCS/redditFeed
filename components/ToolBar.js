import React, { useState, useEffect } from "react";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/Button";
import AppBar from "@material-ui/core/AppBar";
import TextField from "@material-ui/core/TextField";
import SearchIcon from "@material-ui/icons/Search";
import Link from "next/link";
import { useRouter } from "next/router";
import Axios from "axios";

const ToolBar = () => {
  const [userSearch, setUserSearch] = useState(null);
  const [searchPropositions, setSearchPropositions] = useState(null);
  const [inputFocus, setInputFocus] = useState(false);

  const router = useRouter();
  let width = null;

  useEffect(() => {
    width = window.innerWidth;
    //  TODO responsive navbar
  }, []);

  const userSubPropositions = function (research) {
    Axios({
      method: "get",
      url: `https://www.reddit.com/subreddits/search.json?q=${research.replace(
        / /g,
        "+"
      )}&limit=6`,
    })
      .then((result) => {
        setSearchPropositions(result.data.data.children);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const userInputInteract = function (action) {
    // Show propositions on input focus
    switch (action) {
      case "in": {
        setInputFocus(true);
        break;
      }
      case "out": {
        setInterval(() => {
          setInputFocus(false);
        }, 500);
        break;
      }
    }
  };

  return (
    <AppBar position="static" style={classes.appBar}>
      <Toolbar style={classes.toolbar}>
        <div style={classes.itemToolbar}>
          <Link href="/">
            <Button
              size="large"
              style={
                router && router.pathname === "/"
                  ? { borderBottom: "solid 2px orange" }
                  : null
              }
            >
              Home
            </Button>
          </Link>
        </div>
        <div>
          {/*   Sub input  */}
          <div style={classes.inputContainerDesktop}>
            <TextField
              onBlur={() => userInputInteract("out")}
              onFocus={() => userInputInteract("in")}
              className="textField"
              onChange={(event) => {
                setUserSearch(event.target.value);
                userSubPropositions(event.target.value);
              }}
              id="input-with-icon-grid"
              label="Search"
            />
            {searchPropositions && inputFocus ? (
              <div style={classes.propositionsContainer}>
                {searchPropositions.length && inputFocus ? (
                  searchPropositions.map((proposition, key) => {
                    return (
                      <Link
                        href={`/search/${proposition.data.display_name}`}
                        key={key}
                      >
                        <a style={classes.propositionLink}>
                          {proposition.data.display_name_prefixed}
                        </a>
                      </Link>
                    );
                  })
                ) : (
                  <p style={{ color: "black" }}>No result</p>
                )}
              </div>
            ) : null}
          </div>
        </div>
      </Toolbar>
    </AppBar>
  );
};

const classes = {
  appBar: {
    backgroundColor: "white",
    margin: 0,
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },
  itemToolbar: {
    display: "flex",
  },
  inputContainerDesktop: {
    display: "flex",
    alignItems: "center",
  },
  propositionsContainer: {
    position: "absolute",
    top: "65px",
    width: "180px",
    backgroundColor: "rgba(250,250,250, 1)",
    padding: "15px 5px",
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "column",
    boxShadow: "1px 1px 1px grey",
    borderRadius: "3px",
    fontFamily: "roboto",
    zIndex: "4",
  },
  propositionLink: {
    color: "black",
    margin: "10px 0",
    textDecoration: "none",
  },
};

export default ToolBar;
