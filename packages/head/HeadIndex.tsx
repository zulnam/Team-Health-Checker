// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react'; //fails when removed due to <> </>
import Head from 'next/head';
import globalStyles from './globalStyles';
import { Global } from '@emotion/core';

function HeadIndex() {
  return (
    <>
      <Head>
        <title>Team Health Checker</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
          href="https://fonts.googleapis.com/css?family=Ubuntu+Mono&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Global styles={globalStyles} />
    </>
  );
}

export default HeadIndex;
