import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComments } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const SubReddit = ({ props }) => {
  const [hoveredPost, setHoveredPost] = useState(null);

  console.log(props.data);
  return (
    <Link href={`../pages/subreddit/${props.data.title}`}>
      <div
        style={
          hoveredPost
            ? {
                ...classes.subredditContainer,
                boxShadow: "2px 2px 2px grey",
                opacity: "0.9",
              }
            : { ...classes.subredditContainer }
        }
        onMouseEnter={() => setHoveredPost(true)}
        onMouseLeave={() => setHoveredPost(false)}
      >
        <div style={classes.scoreContainer}>
          {props.data.score > 1000 ? (
            <p>{(props.data.score / 1000).toFixed(1)}k</p>
          ) : (
            <p>{props.data.score > 1 ? props.data.score : "."}</p>
          )}
        </div>
        <div style={classes.contentContainer}>
          <div style={classes.postInfo}>
            <p style={{ fontWeight: "bold", margin: "5px 0 0 0" }}>
              r/{props.data.subreddit}
            </p>
            <p style={{ margin: "5px 0 0 5px", color: "grey" }}>
              Posted by u/{props.data.author}
            </p>
          </div>
          <div style={classes.postContent}>
            <h4 style={{ margin: "10px 0" }}>{props.data.title}</h4>
            {props.data.url_overridden_by_dest &&
            props.data.url_overridden_by_dest.includes(".jpg") ? (
              <img
                style={classes.thumbnail}
                src={props.data.url_overridden_by_dest}
                alt="post image"
              />
            ) : null}
            {props.data.media && props.data.media.reddit_video ? (
              <video
                controls
                width="100%"
                src={props.data.media.reddit_video.fallback_url}
              />
            ) : null}
          </div>

          <div style={classes.commentsContainer}>
            <FontAwesomeIcon
              icon={faComments}
              style={{ height: "20px", marginRight: "5px" }}
            />
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
    cursor: "pointer",
  },
  contentContainer: {
    display: "flex",
    width: "100%",
    flexDirection: "column",
    padding: "10px",
    boxSizing: "border-box",
  },
  postInfo: {
    display: "flex",
    width: "100%",
    justifyContent: "flex-start",
    fontSize: "12px",
    flexWrap: "wrap",
  },
  scoreContainer: {
    backgroundColor: "#F8F9FA",
    textAlign: "center",
    fontWeight: "bold",
    width: "50px",
  },
  commentsContainer: {
    display: "flex",
    alignItems: "center",
    fontSize: "12px",
  },
  postContent: {
    display: "flex",
    flexDirection: "column",
    margin: "15px 0",
  },
  thumbnail: {
    width: "60%",
    marginLeft: "auto",
    marginRight: "auto",
  },
};

export default SubReddit;
