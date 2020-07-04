import Head from "next/head";

import ToolBar from "../../../components/ToolBar";
import Footer from "../../../components/Footer";
import ThreadContent from "../../../components/ThreadContent";

export default function Thread() {
  return (
    <div className="container">
      <Head>
        <title>New subreddits</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <ToolBar />
        <div className="threadContent">
          <ThreadContent />
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
