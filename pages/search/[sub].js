import Head from "next/head";
import Footer from "../../components/Footer";
import ToolBar from "../../components/ToolBar";
import { useRouter } from "next/router";
import FeedContent from "../../components/FeedContent";

export default function Sub() {
  const router = useRouter();

  return (
    <div className="container">
      <Head>
        {router.query.sub ? (
          <title>{router.query.sub}</title>
        ) : (
          <title>Reddit thread</title>
        )}
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <ToolBar />
        <div className="threadContent">
          {router.query.sub && (
            <FeedContent
              url={`https://www.reddit.com/r/${router.query.sub}.json?limit=100`}
            />
          )}
        </div>
        <Footer />
      </main>
      <style>
        {`
        body {
          margin: 0;
          background-color: #dae0e6;
          font-family: roboto;
        }
        .threadContent {
          display: flex;
          justify-content: center;
        }
`}
      </style>
    </div>
  );
}
