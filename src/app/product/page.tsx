import Link from "next/link"

export default function Product(){
    const page = 100
    return (
    <div>
        <Link href="/">Home</Link>
        <h1>Product page</h1>
        <h2>
            <Link href="/product/1"> Product 1</Link>
        </h2>
        <h2>
            <Link href="/product/2"> Product 2</Link>
        </h2>
        <h2>
            <Link href="/product/3" replace> Product 3</Link>
        </h2>
        <h2>
            <Link href={`/product/${page}`}>Product {page}</Link>
        </h2>
    </div>
    )
}