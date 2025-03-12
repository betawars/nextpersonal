//This page continues the example of the template parameter in the "metadata" written in the root "layout.tsx"

import { Metadata } from "next"

export const metadata:Metadata = {
    title:"Blog 1"
}

export default function First(){
    return <h1>Blog child first</h1>
}