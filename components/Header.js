import Link from "next/link";

export default function Header() {
    return(
        <>
        {/* <div className="text-3xl  px-6">
          ☰ 
        </div> */}
        <div className="flex flex-row">
        <h1 className="font-headers text-black font-bold text-2xl my-8 px-6">
           Web3 <br/> Remote Jobs
        </h1>
        <Link href={`#`}>
            <button className="fixed top-0 right-0 my-8 px-2 bg-cta h-10 rounded-l-lg text-white">Submit Job</button>
        </Link>
        
        </div>
        </>
    )
}