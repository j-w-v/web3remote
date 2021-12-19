import NextDocument, {
    Html, Head, Main, NextScript
  } from 'next/document';
  
  class Document extends NextDocument {
    render() {
      return (
        <Html>
          <Head>
          <link href="https://fonts.googleapis.com/css2?family=Encode+Sans+Condensed&family=Encode+Sans+Expanded:wght@700&display=swap" rel="stylesheet" />          </Head>
          <body className="bg-bg-main">
            <Main />
            <NextScript />
          </body>
        </Html>
      );
    }
  }
  
  export default Document;