import Head from "next/head";

function HeadIndex() {
  return (
    <Head>
      <title>Team Health Checker</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link
        href="https://fonts.googleapis.com/css?family=Ubuntu+Mono&display=swap"
        rel="stylesheet"
      />
      <style jsx global>{`
        * {
          font-family: "Ubuntu Mono", monospace;
          background-color: black;
          color: white;
        }
        body {
          padding: 0;
          font-family: monospace;
        }
      `}</style>
    </Head>
  );
}

export default HeadIndex;
