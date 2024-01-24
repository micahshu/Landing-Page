import Link from "next/link";


export default function (){

    return (
        <div>
            <div className="flex gap-16 border border-yellow-600 justify-center w-1/2 m-auto mt-4 mb-4 rounded-xl p-4 backdrop-blur-sm bg-white sticky">
                <Link href={'#'}>Home</Link>
                <Link href={'#'}>About</Link>
                <Link href={'#'}>Blog</Link>
                <Link href={'#'}>Contact</Link>
            </div>
        </div>
    )
}