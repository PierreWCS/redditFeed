import React from "react";

const ThreadComment = ({ comment }) => {
  console.log(comment);
  return (
    <div style={classes.commentContainer}>
      <div style={classes.commentScore}>
        {comment.score > 1000 ? (
          <p>{(comment.score / 1000).toFixed(1)}k</p>
        ) : (
          <p>{comment.score > 1 ? comment.score : "."}</p>
        )}
      </div>
      <div style={classes.commentContent}>
        <p style={{ fontSize: "12px", color: "grey" }}>{comment.author}</p>
        <p>{comment.body}</p>
      </div>
    </div>
  );
};

const classes = {
  commentContainer: {
    backgroundColor: "white",
    borderRadius: "3px",
    boxSizing: "border-box",
    borderBottom: "solid 2px lightgrey",
    display: "flex",
  },
  commentScore: {
    backgroundColor: "#f8f9fa",
    width: "50px",
    textAlign: "center",
  },
  commentContent: {
    width: "100%",
    padding: "5px",
  },
};

export default ThreadComment;
