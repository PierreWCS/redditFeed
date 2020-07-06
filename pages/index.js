import Head from "next/head";
import FeedContent from "../components/FeedContent";
import ToolBar from "../components/ToolBar";
import Footer from "../components/Footer";
import { useState } from "react";
import ContentSelector from "../components/ContentSelector";

export default function Home() {
  const [contentSelected, setContentSelected] = useState("popular");
  return (
    <div className="container">
      <Head>
        <title>Reddit feed</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <ToolBar />
        <h1>
          {contentSelected === "popular"
            ? "Most popular subreddits"
            : "New subreddits"}
        </h1>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <ContentSelector
            contentSelected={contentSelected}
            setContentSelected={setContentSelected}
          />
          {contentSelected === "popular" ? (
            <FeedContent
              url={`https://www.reddit.com/r/popular.json?limit=100`}
            />
          ) : null}
          {contentSelected === "new" ? (
            <FeedContent
              url={`https://www.reddit.com/r/popular/new.json?limit=100`}
            />
          ) : null}
        </div>
      </main>

      <Footer />
      <style jsx global>{`
        body {
          margin: 0;
          background-color: #dae0e6;
          font-family: roboto;
        }
        h1 {
          width: 100%;
          padding: 15px;
          box-sizing: border-box;
          background-color: white;
          text-align: center;
        }
      `}</style>
    </div>
  );
}
