import { supabase } from "../../utils/supabase";
import Link from "next/link";
import Head from 'next/head'



const PostDetails = ({ lesson }) => {
  console.log(lesson)
  return (
    <>
    <Head>
          <title>Web3 Remote | {lesson.title} - {lesson.company}</title>
          <link rel="icon" href="/favicon.ico" />
    </Head>
    <div className="">
      <header className="my-4 px-6">
        <div className="flex text-xl">
          <div className="flex-initial">
          <Link href={`/`}>
            <a className="text-sm">
              Back
            </a>
          </Link>
            </div>
          <div className="flex-initial text-center w-full font-bold"><h2>{lesson.company}</h2> </div>
        </div>
      </header>

      <article className="bg-white rounded-t-3xl pt-8  px-6 h-screen">
        <img className="w-14 h-14 mx-auto" src={lesson.image} />
        <h1 className="font-headers text-black font-bold text-3xl mb-6 text-center pt-6">{lesson.title}</h1>
        <div className="flex flex-row justify-center gap-3 mb-6">
        {lesson.tags.tags.map((tag)=>(
          <div className="w-max bg-gray-100 p-1.5 rounded" key={tag}>{tag}</div>
        ))}
        </div>
        <p className="text-justify text-gray-600">{lesson.description}</p>
      </article>

      <div className="bg-white text-xl text-white text-center fixed inset-x-0 bottom-0 p-4">
      <button className="bg-cta rounded p-2 w-9/12">
      <Link href={lesson.link}>
            <a className="">
            Apply Now
            </a>
          </Link>
      </button>
      </div>    
    </div>
    </>
  );
};

export const getStaticPaths = async () => {
  const { data: lessons } = await supabase.from("jobs").select('slug');


  const paths = lessons.map(({ slug }) => ({
    params: {
      slug: slug
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params: { slug } }) => {
  const { data: lesson } = await supabase
    .from("jobs")
    .select("*")
    .eq("slug", slug)
    .single();

  return {
    props: {
      lesson,
    },
  };
};

export default PostDetails;