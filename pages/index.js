import Head from 'next/head'
import Link from "next/link";

import { supabase } from '../utils/supabase'

import Header from '../components/Header'
import Footer from '../components/Footer'


export default function Posts({ posts }) {
    return (
      <>
        <Head>
          <title>Web3 Remote | Find remote Web3 jobs</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header 
          title={true}
          titleText="Find Remote Web3 Jobs" />

        <div className="w-full max-w-3xl mx-auto my-8 px-6">
        <h2 className="pb-4 font-bold">Featured</h2>
        {posts.map((post) => (
          post.featured === true ? 
          <Link key={post.id} href={`/jobs/${post.slug}`}>
            <a className="flex w-full p-3 mb-2 text-xl bg-job-main rounded-lg h-18">
              <div>
                <img className="w-11 h-11 inline mr-2" src={post.image} />
              </div>
              <div>
                <h2 className="block w-full text-base inline font-bold">{post.title}</h2>
                <h3 className="text-sm block text-gray-600">{post.company}</h3>
              </div>
            </a>
          </Link> : ''
        ))}
        </div>

        <div className="w-full max-w-3xl mx-auto my-8 px-6">
        <h2 className="pb-4 font-bold">Recently Added</h2>
        {posts.map((post) => (
          post.featured === false ? 
          <Link key={post.id} href={`/jobs/${post.slug}`}>
            <a className="flex w-full p-3 mb-2 text-xl bg-job-main rounded-lg h-18 border border-gray-100">
              <div>
                <img className="w-11 h-11 inline mr-2" src={post.image} />
              </div>
              <div>
                <h2 className="block w-full text-base inline font-bold">{post.title}</h2>
                <h3 className="text-sm block text-gray-600">{post.company}</h3>
              </div>
            </a>
          </Link> : ''
        ))}
        <Footer />
      </div>
      </>
    );
  }
  
export const getStaticProps = async () => {
    const { data: posts } = await supabase.from("jobs").select("*");
  
    return {
      props: {
        posts,
      },
    };
};
