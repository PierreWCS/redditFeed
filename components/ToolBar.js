import React from "react";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import AppBar from "@material-ui/core/AppBar";
import Link from "next/link";
import { useRouter } from "next/router";

const ToolBar = () => {
  const router = useRouter();

  return (
    <AppBar position="static" style={classes.appBar}>
      <Toolbar style={classes.toolbar}>
        <Typography variant="h6" style={{ color: "black" }}>
          Reddit feed
        </Typography>
        <div>
          <Link href="/">
            <Button
              style={
                router && router.pathname === "/"
                  ? { borderBottom: "solid 2px orange" }
                  : null
              }
            >
              Hot
            </Button>
          </Link>
          <Link href="/new">
            <Button
              style={
                router && router.pathname === "/new"
                  ? { borderBottom: "solid 2px orange" }
                  : null
              }
            >
              New
            </Button>
          </Link>
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
};

export default ToolBar;
