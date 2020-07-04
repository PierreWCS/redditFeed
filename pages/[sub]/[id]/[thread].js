import Head from "next/head";

export default function Thread() {
  console.log(window.location.params);
  return (
    <div className="container">
      <Head>
        <title>New subreddits</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>Page title</h1>
      </main>
    </div>
  );
}
