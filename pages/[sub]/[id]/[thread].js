import Head from "next/head";
import ToolBar from "../../../components/ToolBar";
import Footer from "../../../components/Footer";
import ThreadContent from "../../../components/ThreadContent";
import { useRouter } from "next/router";

export default function Thread() {
  const router = useRouter();
  return (
    <div className="container">
      <Head>
        {router.query.thread ? (
          <title>{router.query.thread.replace(/_/g, " ")}</title>
        ) : (
          <title>Reddit thread</title>
        )}
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
