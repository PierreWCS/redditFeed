import Head from "next/head";
import Footer from "../../components/Footer";
import ToolBar from "../../components/ToolBar";
import { useRouter } from "next/router";
import FeedContent from "../../components/FeedContent";
import ContentSelector from "../../components/ContentSelector";
import { useState } from "react";

export default function Sub() {
  const [contentSelected, setContentSelected] = useState("popular");
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
          <ContentSelector
            contentSelected={contentSelected}
            setContentSelected={setContentSelected}
          />

          {router.query.sub && contentSelected === "popular" ? (
            <FeedContent
              url={`https://www.reddit.com/r/${router.query.sub}.json?limit=100`}
            />
          ) : null}

          {router.query.sub && contentSelected === "new" ? (
            <FeedContent
              url={`https://www.reddit.com/r/${router.query.sub}/new.json?limit=100`}
            />
          ) : null}
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
          flex-direction: column;
          align-items: center;
          padding-top: 15px;
        }
`}
      </style>
    </div>
  );
}
