import React, { useEffect, useState } from "react";
import Sort from "./services/Sort";
import ThreadReply from "./ThreadReply";
import Time from "./services/Time";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";

const ThreadComment = ({ comment }) => {
  const [bestReplies, setBestReplies] = useState(null);
  let threadDate = Time.timestampToDate(comment.created_utc);
  let threadTime = Time.timestampToTime(comment.created_utc);

  useEffect(() => {
    if (comment.replies.data) {
      filterBestReplies(comment.replies.data.children);
    } else setBestReplies([]);
  }, []);

  const filterBestReplies = function (replies) {
    let favReplies = Sort.sortAll(replies, 5);
    setBestReplies(favReplies);
  };

  return (
    <div style={classes.commentAndReplies}>
      <div style={classes.commentContainer}>
        <div style={classes.commentScore}>
          <ArrowDropUpIcon style={{ fontSize: "18px", color: "black" }} />
          {comment.score > 1000 ? (
            <p style={{ margin: "2px 0" }}>
              {(comment.score / 1000).toFixed(1)}k
            </p>
          ) : (
            <p style={{ margin: "2px 0", fontSize: "12px" }}>
              {comment.score > 1 ? comment.score : "."}
            </p>
          )}
          <ArrowDropDownIcon style={{ fontSize: "18px", color: "grey" }} />
        </div>
        <div style={classes.commentContent}>
          <div style={classes.commentInfo}>
            <p style={{ fontSize: "12px", color: "black" }}>{comment.author}</p>
            <p style={{ fontSize: "12px", color: "grey", marginLeft: "10px" }}>
              {threadDate} at {threadTime}
            </p>
          </div>
          <p style={classes.commentText}>{comment.body}</p>
        </div>
      </div>
      {bestReplies && bestReplies.length
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
    marginTop: "5px",
  },
  commentScore: {
    backgroundColor: "#f8f9fa",
    minWidth: "50px",
    textAlign: "center",
  },
  commentInfo: {
    display: "flex",
    alignItems: "center",
  },
  commentContent: {
    width: "90%",
    padding: "5px",
  },
  commentText: {
    marginBottom: "15px",
    maxWidth: "80%",
    wordWrap: "break-word",
    whiteSpace: "pre-line",
  },
};

export default ThreadComment;
