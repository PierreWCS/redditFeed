import Head from "next/head";
import FeedContent from "../components/FeedContent";
import ToolBar from "../components/ToolBar";
import Footer from "../components/Footer";

export default function New() {
  return (
    <div>
      <Head>
        <title>New subreddits</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="content">
        <ToolBar />
        <h1>Discover the latest subreddits</h1>
        <div className="contentContainer">
          <FeedContent url="https://www.reddit.com/r/popular/new.json?limit=100" />
        </div>
      </main>
      <Footer />
      <style>
        {`
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
        .contentContainer {
        width: 100%;
        display: flex;
        justify-content: center;
        }
      `}
      </style>
    </div>
  );
}
