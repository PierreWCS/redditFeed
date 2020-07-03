import Head from "next/head";
import FeedContent from "../components/FeedContent";
import ToolBar from "../components/ToolBar";

export default function New() {
  return (
    <div>
      <Head>
        <title>New subreddits</title>
      </Head>
      <main>
        <ToolBar />
        <FeedContent url="https://www.reddit.com/r/popular/new.json?limit=50" />
      </main>
      <style>
        {`
        body {
          margin: 0;
          background-color: #dae0e6;
        }
      `}
      </style>
    </div>
  );
}
