import NextDocument, {
    Html, Head, Main, NextScript
  } from 'next/document';
  
  class Document extends NextDocument {
    render() {
      return (
        <Html>
          <Head>
            <link href="https://fonts.googleapis.com/css2?family=Encode+Sans:wght@800&display=swap" rel="stylesheet" />
          </Head>
          <body className="bg-bg-main">
            <Main />
            <NextScript />
          </body>
        </Html>
      );
    }
  }
  
  export default Document;