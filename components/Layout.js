import Header from "./Header.js";
import Footer from './Footer';
import Head from 'next/head'


export default function Layout (props) {
return ( 
    <>
        <Head>
          <title>Web3 Remote | Find remote Web3 jobs</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header {...props}
        />
            {props.children}
        <Footer /> 
    </>
)
};
