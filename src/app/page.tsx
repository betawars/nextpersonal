//This page and some of the others have the exaple of the <Link> which is used for navigation

import Link from "next/link";

export default function Home(){
    return (
        <div>
            <Link href="/login">Login</Link>
            <h1>Home</h1>
            <Link href="/articles/123?lang=en">Articles in English</Link>
            <Link href="/articles/123?lang=fr">Articles in French</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/product">Product</Link>
        </div>
    )
}