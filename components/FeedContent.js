import React, { useEffect, useState } from "react";
import Axios from "axios";
import SubReddit from "./SubReddit";
import CircularProgress from "@material-ui/core/CircularProgress";

const FeedContent = ({ url }) => {
  const [content, setContent] = useState(null);
  useEffect(() => {
    getContent();
  }, []);

  function getContent() {
    Axios({
      method: "get",
      url: url,
    }).then((result) => {
      setContent(result.data.data.children);
    });
  }

  return (
    <div className="subredditFeedContainer">
      <h1>Content container</h1>
      {content ? (
        content.map((subreddit, key) => {
          return <SubReddit props={subreddit} key={key} />;
        })
      ) : (
        <CircularProgress style={{ margin: "50px 0" }} />
      )}
      <style jsx global>
        {`
          .subredditFeedContainer {
            width: 50%;
            display: flex;
            flex-direction: column;
            align-items: center;
          }

          @media (max-width: 1060px) {
            .subredditFeedContainer {
              width: 100%;
              padding: 0 10px;
              box-sizing: border-box;
            }
          }
        `}
      </style>
    </div>
  );
};

export default FeedContent;
