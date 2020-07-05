import Head from "next/head";
import FeedContent from "../components/FeedContent";
import ToolBar from "../components/ToolBar";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Reddit feed</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <ToolBar />
        <h1>Most popular subreddits</h1>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <FeedContent url="https://www.reddit.com/r/popular.json?limit=100" />
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
