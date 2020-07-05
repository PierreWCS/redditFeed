import React from "react";
import Time from "./services/Time";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";

const ThreadDetails = ({ thread }) => {
  let threadDate = Time.timestampToDate(thread.created_utc);
  let threadTime = Time.timestampToTime(thread.created_utc);

  return (
    <div style={classes.threadPost}>
      <div style={classes.scoreContainer}>
        <ArrowDropUpIcon style={{ fontSize: "22px", color: "black" }} />
        {thread.score > 1000 ? (
          <p style={{ margin: "2px 0" }}>{(thread.score / 1000).toFixed(1)}k</p>
        ) : (
          <p style={{ margin: "2px 0", fontSize: "12px" }}>
            {thread.score > 1 ? thread.score : "."}
          </p>
        )}
        <ArrowDropDownIcon style={{ fontSize: "22px", color: "grey" }} />
      </div>
      <div style={classes.postContent}>
        <div style={classes.threadInfo}>
          <p style={{ color: "grey", fontSize: "13px" }}>
            Posted by{" "}
            <span style={{ color: "black", fontWeight: "bold" }}>
              u/{thread.author}
            </span>
          </p>
          <p style={{ color: "grey", fontSize: "13px", marginLeft: "25px" }}>
            {threadDate} at {threadTime}.
          </p>
        </div>

        <p>{thread.title}</p>
        <p style={{ color: "blue", textDecoration: "underline" }}>
          {thread.selftext
            ? thread.selftext.split("(").pop().split(")")[0]
            : null}
        </p>
        {(thread.url_overridden_by_dest &&
          thread.url_overridden_by_dest.includes(".jpg")) ||
        (thread.url_overridden_by_dest &&
          thread.url_overridden_by_dest.includes(".png")) ? (
          <img
            style={classes.thumbnail}
            src={thread.url_overridden_by_dest}
            alt="post image"
          />
        ) : null}
        {thread.media && thread.media.reddit_video ? (
          <video
            style={{ maxWidth: "100%" }}
            controls
            height="80%"
            src={thread.media.reddit_video.fallback_url}
          />
        ) : null}
      </div>
    </div>
  );
};

const classes = {
  threadPost: {
    display: "flex",
    width: "100%",
    maxHeight: "700px",
    backgroundColor: "white",
    margin: "25px 0 5px 0",
    minHeight: "250px",
    borderRadius: "3px",
  },
  scoreContainer: {
    backgroundColor: "#f8f9fa",
    width: "70px",
    fontWeight: "bold",
    paddingTop: "10px",
    textAlign: "center",
  },
  postContent: {
    display: "flex",
    flexDirection: "column",
    padding: "0 10px 10px 10px",
    width: "100%",
  },
  threadInfo: {
    display: "flex",
  },
  thumbnail: {
    maxHeight: "450px",
    maxWidth: "100%",
    marginLeft: "auto",
    marginRight: "auto",
  },
};

export default ThreadDetails;
