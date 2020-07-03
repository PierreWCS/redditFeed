import React from "react";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import AppBar from "@material-ui/core/AppBar";
import Link from "next/link";

const ToolBar = () => {
  return (
    <AppBar position="static" style={classes.appBar}>
      <Toolbar>
        <Typography variant="h6" style={{ color: "black" }}>
          Reddit feed
        </Typography>
        <Link href="/">
          <Button>Hot</Button>
        </Link>
        <Link href="/new">
          <Button>New</Button>
        </Link>
      </Toolbar>
    </AppBar>
  );
};

const classes = {
  appBar: {
    backgroundColor: "white",
    margin: 0,
  },
};

export default ToolBar;
