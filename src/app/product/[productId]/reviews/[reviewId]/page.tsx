import { notFound, redirect } from "next/navigation";

export default async function ProductReview({params}:{
    params:Promise<{productId:string; reviewId:string}>
}) {
    const {productId,reviewId} = await params

    //this is the example of routing to custom 'not found' page when it performs a certain condition
    if( Number(reviewId)>1000){
        // notFound()
        redirect("/")// This can be used in cases where instead of redirecting the user to the not found page, you want redirect them to a different page, in this case, the home page.
    }

    return <h1>Product {productId} review {reviewId}</h1>   
}