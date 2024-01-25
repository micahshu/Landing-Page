import Link from "next/link";


export default function (){

    return (
        <div className="fixed left-1/2 -translate-x-1/2 z-50">
            <div className="flex gap-16 border border-black justify-center  m-auto mt-4 mb-4 rounded-xl p-4 backdrop-blur-sm text-white">
                <Link href={'#'}>Home</Link>
                <Link href={'#'}>About</Link>
                <Link href={'#'}>Blog</Link>
                <Link href={'#'}>Contact</Link>
            </div>
        </div>
    )
}