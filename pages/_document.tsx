import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render(): JSX.Element {
    return (
      <Html>
        <Head>
          <title>멋쟁이사자처럼 인천대학교</title>
          <meta name="description" content="멋쟁이사자처럼 인천대학교" />
          <meta property="og:title" content="멋쟁이사자처럼 인천대학교" />
          <meta property="og:image" content="" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, user-scalable=no"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
