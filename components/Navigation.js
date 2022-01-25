import Link from "next/link";
import Image from 'next/image'
import logo from '../public/web3.png'

export default function Navigation() {
    return(
        <>            
            <nav className="w-full text-center pt-4 flex justify-around items-center font-bold">
                <Link href="/">
                <Image
                    src={logo}
                    alt="Web3 Remote Jobs"
                    height={62}
                    width={58}
                    layout="fixed"     
                />
                </Link>
                <Link href="/">
                <a>Jobs </a>
                </Link>
                <Link href="/">
                <a>Web3 </a>
                </Link>
                <Link href="/submit">
                <a className="text-cta">Submit  </a>
                </Link>
            </nav>
        </>
    )
}