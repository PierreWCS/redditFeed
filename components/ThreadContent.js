import React, { useEffect, useState } from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import { useRouter } from "next/router";
import ThreadComment from "./ThreadComment";
import Sort from "./services/Sort";

const ThreadContent = () => {
  const [postContent, setPostContent] = useState(null);
  const [postComments, setPostComments] = useState(null);
  const [bestComments, setBestComments] = useState(null);
  const router = useRouter();

  const filterBestComments = function (allComments) {
    let favComments = Sort.sortAll(allComments, 3);
    setBestComments(favComments);
  };

  useEffect(() => {
    // Waiting for the router to contain the queries
    if (router.asPath !== router.route) {
      getContent(router.query.sub, router.query.id, router.query.thread);
    }
  }, [router]);

  function getContent(sub, id, thread) {
    fetch(`https://www.reddit.com/r/${sub}/comments/${id}/${thread}.json`)
      .then((response) => response.json())
      .then(
        (json) => {
          setPostContent(json[0].data.children[0].data);
          setPostComments(json[1].data.children);
          filterBestComments(json[1].data.children);
        },
        (error) => {
          console.log(error);
        }
      );
  }

  return (
    <div style={classes.threadContentContainer}>
      {postContent ? (
        <div>
          <div style={classes.threadPost}>
            <div style={classes.scoreContainer}>
              {postContent.score > 1000 ? (
                <p>{(postContent.score / 1000).toFixed(1)}k</p>
              ) : (
                <p>{postContent.score > 1 ? postContent.score : "."}</p>
              )}
            </div>
            <div style={classes.postContent}>
              <p>Posted by u/{postContent.author}</p>
              <p>{postContent.title}</p>
              {(postContent.url_overridden_by_dest &&
                postContent.url_overridden_by_dest.includes(".jpg")) ||
              (postContent.url_overridden_by_dest &&
                postContent.url_overridden_by_dest.includes(".png")) ? (
                <img
                  style={classes.thumbnail}
                  src={postContent.url_overridden_by_dest}
                  alt="post image"
                />
              ) : null}
              {postContent.media && postContent.media.reddit_video ? (
                <video
                  controls
                  width="100%"
                  src={postContent.media.reddit_video.fallback_url}
                />
              ) : null}
            </div>
          </div>
          <div style={classes.commentsContainer}>
            {bestComments ? (
              bestComments.map((comment, key) => {
                return <ThreadComment key={key} comment={comment.data} />;
              })
            ) : (
              <CircularProgress style={{ margin: "50px 0" }} />
            )}
          </div>
        </div>
      ) : (
        <CircularProgress style={{ margin: "50px 0" }} />
      )}
    </div>
  );
};

const classes = {
  threadContentContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "60%",
  },
  threadPost: {
    display: "flex",
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
  },
  thumbnail: {
    width: "60%",
    marginLeft: "auto",
    marginRight: "auto",
  },
  commentsContainer: {
    margin: "0 0 50px 0",
  },
};

export default ThreadContent;
