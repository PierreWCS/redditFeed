import React, { useEffect, useState } from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import { useRouter } from "next/router";
import ThreadComment from "./ThreadComment";
import Sort from "./services/Sort";
import ThreadDetails from "./ThreadDetails";

const ThreadContent = () => {
  const [postContent, setPostContent] = useState(null);
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
          if (json[1].data.children.length) {
            filterBestComments(json[1].data.children);
          } else setBestComments("empty");
        },
        (error) => {
          console.log(error);
        }
      );
  }

  return (
    <div className="threadContentContainer">
      {postContent ? (
        <ThreadDetails thread={postContent} />
      ) : (
        <CircularProgress style={{ margin: "50px 0" }} />
      )}
      {bestComments && bestComments !== "empty"
        ? bestComments.map((comment, key) => {
            return <ThreadComment key={key} comment={comment.data} />;
          })
        : null}
      {bestComments === "empty" ? (
        <p style={classes.noComments}>No comments</p>
      ) : null}
      <style jsx>
        {`
          .threadContentContainer {
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 60%;
          }
          @media (max-width: 1060px) {
            .threadContentContainer {
              width: 90%;
            }
          }
        `}
      </style>
    </div>
  );
};

const classes = {
  noComments: {
    width: "100%",
    textAlign: "center",
    fontFamily: "roboto",
    padding: "25px 0",
    backgroundColor: "white",
  },
};

export default ThreadContent;
