export default async function ProductReview({params}:{
    params:Promise<{productId:string; reviewId:string}>
}) {
    const {productId,reviewId} = await params
    return <h1>Product {productId} review {reviewId}</h1>   
}