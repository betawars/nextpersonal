// This is an example of using search params and the params and how do we use the query parameters and the dynamic route parameter written for server components using async await


// NOTE! "USE CLIENT" DOES NOT NOT SUPPORT "ASYNC" FUNCTIONS
// To use params and search params in a "USE CLIENT" pageXOffset, we need to use the "use" hook from react and make the changes as below
// import{use} from "react";
// line 18: "use(params)" instead of "await params"
// line 19: "use(searchParams)" insead of "await searchParams"

import Link from "next/link";

export default async function ArticlePage({
    params,searchParams
}:{
    params: Promise<{articleId:string}>;
    searchParams: Promise<{lang?:"en"|"es"|"fr"}>;
}){
    const {articleId} = await params;
    const {lang="en"} = await searchParams;
    return(
        <div>
            <h1>News in article {articleId}</h1>
            <p>Reading in language {lang}</p>

            <div>
                <Link href={`/articles/${articleId}?lang=en`}>English</Link>
                <Link href={`/articles/${articleId}?lang=es`}>Spanish</Link>
                <Link href={`/articles/${articleId}?lang=fr`}>French</Link>
            </div>
        </div>
    )
}