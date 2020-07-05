import React from "react";
import Time from "./services/Time";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";

const ThreadReply = ({ reply }) => {
  let postDate = Time.timestampToDate(reply.created_utc);
  let postTime = Time.timestampToTime(reply.created_utc);

  return (
    <div style={classes.replyContainer}>
      <div style={classes.scoreContainer}>
        <ArrowDropUpIcon style={{ fontSize: "16px", color: "black" }} />
        {reply.score > 1000 ? (
          <p style={{ margin: "0" }}>{(reply.score / 1000).toFixed(1)}k</p>
        ) : (
          <p style={{ margin: "0", fontSize: "11px" }}>
            {reply.score > 1 ? reply.score : "."}
          </p>
        )}
        <ArrowDropDownIcon style={{ fontSize: "16px", color: "grey" }} />
      </div>
      <div style={classes.replyContent}>
        <div style={classes.postInfo}>
          <p style={{ color: "black", margin: "5px 0", fontSize: "13px" }}>
            {reply.author}
          </p>
          <p
            style={{
              color: "grey",
              margin: "5px 0 5px 10px",
              fontSize: "13px",
            }}
          >
            {postDate} at {postTime}
          </p>
        </div>
        <p style={classes.replyText}>{reply.body}</p>
      </div>
    </div>
  );
};

const classes = {
  replyContainer: {
    width: "100%",
    boxSizing: "border-box",
    backgroundColor: "white",
    display: "flex",
    marginLeft: "auto",
    marginRight: "auto",
    borderLeft: "solid 3px lightgrey",
    borderRight: "solid 3px lightgrey",
    borderBottom: "solid 1px lightgrey",
  },
  scoreContainer: {
    backgroundColor: "#f8f9fa",
    minWidth: "50px",
    textAlign: "center",
    fontSize: "12px",
    paddingTop: "5px",
  },
  replyContent: {
    boxSizing: "border-box",
    padding: "5px",
    width: "90%",
  },
  postInfo: {
    display: "flex",
  },
  replyText: {
    fontSize: "14px",
    width: "90%",
    marginBottom: "0 0 15px 0",
    wordWrap: "break-word",
    whiteSpace: "pre-line",
  },
};

export default ThreadReply;
