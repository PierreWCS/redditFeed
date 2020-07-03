import Head from "next/head";
import Link from "next/link";
import FeedContent from "../components/FeedContent";
import ToolBar from "../components/ToolBar";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Reddit feed</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <ToolBar />

        <Link href="/about">
          <a>About us</a>
        </Link>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <FeedContent url="https://www.reddit.com/r/popular.json?limit=50" />
        </div>
      </main>

      <footer>
        <a
          href="https://github.com/PierreWCS/redditFeed"
          target="_blank"
          rel="noopener noreferrer"
        >
          Code available here
        </a>
      </footer>
      <style jsx global>{`
        body {
          margin: 0;
          background-color: #dae0e6;
        }
        footer {
          width: 100%;
          height: 10vh;
          background-color: #eee;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        footer a {
          color: black;
        }
      `}</style>
    </div>
  );
}
