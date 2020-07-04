import React from "react";

const ThreadReply = ({ reply }) => {
  console.log(reply);
  return (
    <div style={classes.replyContainer}>
      <div style={classes.scoreContainer}>
        {reply.score > 1000 ? (
          <p>{(reply.score / 1000).toFixed(1)}k</p>
        ) : (
          <p>{reply.score > 1 ? reply.score : "."}</p>
        )}
      </div>
      <div style={classes.replyContent}>
        <p style={{ color: "grey" }}>{reply.author}</p>
        <p>{reply.body}</p>
      </div>
    </div>
  );
};

const classes = {
  replyContainer: {
    width: "95%",
    backgroundColor: "whitesmoke",
    borderRadius: "3px",
    display: "flex",
    margin: "2px 0 2px 25px",
  },
  scoreContainer: {
    backgroundColor: "#f8f9fa",
    width: "50px",
    textAlign: "center",
  },
  replyContent: {
    boxSizing: "border-box",
    padding: "5px",
    width: "100%",
  },
};

export default ThreadReply;
