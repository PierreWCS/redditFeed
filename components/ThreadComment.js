import React, { useEffect, useState } from "react";
import Sort from "./services/Sort";
import ThreadReply from "./ThreadReply";

const ThreadComment = ({ comment }) => {
  const [bestReplies, setBestReplies] = useState(null);

  useEffect(() => {
    filterBestReplies(comment.replies.data.children);
  }, []);

  const filterBestReplies = function (replies) {
    let favReplies = Sort.sortAll(replies, 5);
    setBestReplies(favReplies);
  };

  return (
    <div style={classes.commentAndReplies}>
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
      {bestReplies
        ? bestReplies.map((reply, key) => {
            if (reply.data.body !== "[effacé]") {
              return <ThreadReply reply={reply.data} key={key} />;
            }
          })
        : null}
    </div>
  );
};

const classes = {
  commentAndReplies: {
    width: "100%",
  },
  commentContainer: {
    backgroundColor: "white",
    borderRadius: "3px",
    boxSizing: "border-box",
    borderBottom: "solid 2px lightgrey",
    display: "flex",
    margin: "15px 0 2px 0",
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
