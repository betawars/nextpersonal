import { redirect } from "next/navigation";

function getRandomInt(count:number){
    return Math.floor(Math.random()*count)
}
     
export default async function ProductReview({params}:{
    params:Promise<{productId:string; reviewId:string}>
}) {

    //part of the example of how we can handle errors and also an example to simulate a manual error
    // If there is an error similar to this in the project which is not handled, it will break the web app which will result in loss of functionality
    // For that, use the error.tsx
    // npm run build, npm run start -- prod commands
    const random = getRandomInt(2);
    if(random === 1){
        throw new Error("Loading error")
    }
    const {productId,reviewId} = await params

    //this is the example of routing to custom 'not found' page when it performs a certain condition
    if( Number(reviewId)>1000){
        // notFound()
        redirect("/")// This can be used in cases where instead of redirecting the user to the not found page, you want redirect them to a different page, in this case, the home page.
    }

    return <h1>Product {productId} review {reviewId}</h1>   
}