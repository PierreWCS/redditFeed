import React, { useEffect, useState } from "react";
import Axios from "axios";
import SubReddit from "./SubReddit";
import CircularProgress from "@material-ui/core/CircularProgress";
import InfiniteScroll from "react-infinite-scroll-component";

const FeedContent = ({ url }) => {
  const [content, setContent] = useState(null);
  const [contentDisplayed, setContentDisplayed] = useState(10);

  useEffect(() => {
    getContent();
  }, []);

  function getContent() {
    Axios({
      method: "get",
      url: url,
    }).then((result) => {
      console.log(result.data.data.children.length);
      setContent(result.data.data.children);
    });
  }

  return (
    <div className="subredditFeedContainer">
      {content ? (
        <InfiniteScroll
          dataLength={contentDisplayed}
          next={() => setContentDisplayed(contentDisplayed + 10)}
          hasMore={true}
          loader={
            <CircularProgress style={{ margin: "50px auto 50px auto" }} />
          }
        >
          {content.map((subreddit, key) => {
            if (key < contentDisplayed) {
              return <SubReddit key={key} props={subreddit} />;
            }
          })}
        </InfiniteScroll>
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
            min-height: 100vh;
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
