//This is an example to auto generate the meta data
//Metadata can be geerated bu using 3 factors
// Current Route parameters
// External Data
// Metadata defined in parent segment


// This code is used to generate the metadata with the help of the parameters in the url
//IN the real life scenario we can use this when we have the data from the apis
import { Metadata } from "next";
import Link from "next/link";

type Props = {
    params : Promise<{productId:string}>;
};

export const generateMetadata = async({params,}:Props): Promise<Metadata> =>{
    const id = (await params).productId;
    // In real life scenarios this below set time out will be replace by the api call/data and the data will be fetched from there
    const title = await new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(`iPhone ${id}`);
        },100)   
    });
    
    return{
        title: `${title}`,
    }
};
//////


export default async function ProductDetails({params}:{
    params: Promise<{productId:string}>;
}){
    const productId = (await params).productId;
    return (
    <div>
        <Link href="/product">Back</Link>
        <Link href="/">Home</Link>

        <h1>{productId} details page</h1>
    </div>
    )
}