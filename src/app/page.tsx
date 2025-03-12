//This page and some of the others have the exaple of the <Link> which is used for navigation

import Link from "next/link";

export default function Home(){
    return (
        <div>
            <h1>Home</h1>
            <Link href="/blog">Blog</Link>
            <Link href="/product">Product</Link>
        </div>
    )
}