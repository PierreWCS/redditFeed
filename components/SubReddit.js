import React, { useState } from "react";
import Link from "next/link";
import Time from "./services/Time";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ChatBubbleIcon from "@material-ui/icons/ChatBubble";

const SubReddit = ({ props }) => {
  const [hoveredPost, setHoveredPost] = useState(null);
  let address = props.data.permalink.split("/");
  let threadDate = Time.timestampToDate(props.data.created_utc);
  let threadTime = Time.timestampToTime(props.data.created_utc);

  return (
    <Link href={`/${address[2]}/${address[4]}/${address[5]}`}>
      <div
        style={
          hoveredPost
            ? {
                ...classes.subredditContainer,
                boxShadow: "2px 2px 2px grey",
              }
            : { ...classes.subredditContainer }
        }
        onMouseEnter={() => setHoveredPost(true)}
        onMouseLeave={() => setHoveredPost(false)}
      >
        <div style={classes.scoreContainer}>
          <ArrowDropUpIcon />
          {props.data.score > 1000 ? (
            <p style={{ margin: "0" }}>
              {(props.data.score / 1000).toFixed(1)}k
            </p>
          ) : (
            <p style={{ margin: "0" }}>
              {props.data.score > 1 ? props.data.score : "."}
            </p>
          )}
          <ArrowDropDownIcon />
        </div>
        <div style={classes.contentContainer}>
          <div style={classes.postInfo}>
            <p style={{ fontWeight: "bold", margin: "5px 0 0 0" }}>
              r/{props.data.subreddit}
            </p>
            <p style={{ margin: "5px 0 0 5px", color: "grey" }}>
              Posted by{" "}
              <span style={{ fontWeight: "bold", color: "black" }}>
                u/{props.data.author}
              </span>
            </p>
            <p style={{ margin: "5px 0 0 15px", color: "grey" }}>
              {threadDate} at {threadTime}
            </p>
          </div>
          <div style={classes.postContent}>
            <h4 style={{ margin: "10px 0" }}>{props.data.title}</h4>
            {(props.data.url_overridden_by_dest &&
              props.data.url_overridden_by_dest.includes(".jpg")) ||
            (props.data.url_overridden_by_dest &&
              props.data.url_overridden_by_dest.includes(".png")) ? (
              <img
                style={classes.thumbnail}
                src={props.data.url_overridden_by_dest}
                alt="post image"
              />
            ) : null}
            {props.data.media && props.data.media.reddit_video ? (
              <video
                style={classes.video}
                controls
                src={props.data.media.reddit_video.fallback_url}
              />
            ) : null}
          </div>

          <div style={classes.commentsContainer}>
            <ChatBubbleIcon style={{ marginRight: "5px", fontSize: "16px" }} />
            {props.data.num_comments > 1000 ? (
              <p style={{ margin: "0" }}>
                {(props.data.num_comments / 1000).toFixed(1)}k Comments
              </p>
            ) : (
              <p style={{ margin: "0" }}>{props.data.num_comments} Comments</p>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};

const classes = {
  subredditContainer: {
    backgroundColor: "white",
    border: "solid 1px lightgrey",
    margin: "5px 0",
    display: "flex",
    fontFamily: "roboto, sans-serif",
    letterSpacing: "0.5px",
    borderRadius: "3px",
    width: "100%",
    maxHeight: "550px",
    cursor: "pointer",
  },
  contentContainer: {
    display: "flex",
    width: "100%",
    flexDirection: "column",
    justifyContent: "space-between",
    height: "100%",
    padding: "10px",
    boxSizing: "border-box",
  },
  postInfo: {
    display: "flex",
    width: "100%",
    justifyContent: "flex-start",
    alignItems: "center",
    fontSize: "12px",
    flexWrap: "wrap",
  },
  scoreContainer: {
    backgroundColor: "#F8F9FA",
    paddingTop: "5px",
    textAlign: "center",
    width: "70px",
  },
  commentsContainer: {
    display: "flex",
    alignItems: "center",
    fontSize: "12px",
  },
  postContent: {
    display: "flex",
    maxHeight: "90%",
    width: "100%",
    flexDirection: "column",
    boxSizing: "border-box",
    margin: "15px 0",
  },
  thumbnail: {
    maxWidth: "80%",
    maxHeight: "350px",
    marginLeft: "auto",
    marginRight: "auto",
  },
  video: {
    maxHeight: "350px",
    maxWidth: "100%",
  },
};

export default SubReddit;
