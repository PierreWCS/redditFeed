import React from "react";

const ThreadDetails = ({ thread }) => {
  return (
    <div style={classes.threadPost}>
      <div style={classes.scoreContainer}>
        {thread.score > 1000 ? (
          <p>{(thread.score / 1000).toFixed(1)}k</p>
        ) : (
          <p>{thread.score > 1 ? thread.score : "."}</p>
        )}
      </div>
      <div style={classes.postContent}>
        <p>Posted by u/{thread.author}</p>
        <p>{thread.title}</p>
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
    margin: "25px 0",
    minHeight: "250px",
    borderRadius: "3px",
  },
  scoreContainer: {
    backgroundColor: "#f8f9fa",
    width: "50px",
    fontWeight: "bold",
    textAlign: "center",
  },
  postContent: {
    display: "flex",
    flexDirection: "column",
    padding: "0 10px 10px 10px",
    width: "100%",
  },
  thumbnail: {
    height: "100%",
    maxWidth: "100%",
    marginLeft: "auto",
    marginRight: "auto",
  },
};

export default ThreadDetails;
