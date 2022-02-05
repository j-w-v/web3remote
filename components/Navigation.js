import Link from "next/link";
import Image from 'next/image'
import { useRouter } from "next/router";

import logo from '../public/web3.png'

export default function Navigation() {
    const router = useRouter();

    return(
        <>            
            <nav className="w-full text-center pt-4 flex justify-around items-center font-bold">
            <Link href="/">
                <a>
                <Image
                    src={logo}
                    alt="Web3 Remote Jobs"
                    height={62}
                    width={58}
                    layout="fixed"     
                />
                </a>
                </Link>
                <Link href="/jobs">
                <a className={router.pathname == "/jobs" ? "active" : ""}>Jobs </a>
                </Link>
                <Link href="/web3">
                <a className={router.pathname == "/web3" ? "active" : ""}>Web3 </a>
                </Link>
                <Link href="/submit">
                <a className="text-cta">Submit </a>
                </Link>
            </nav>
        </>
    )
}