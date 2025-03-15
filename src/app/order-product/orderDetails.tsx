//This page is an example for how we can navigate to a page programatically, we use router from next/navigation to achieve that 

"use client"
import { useRouter } from "next/navigation";

export default function OrderDetails(){
    const router = useRouter()

    const handleClick = () =>{
        console.log("Order Placed");
        router.push("/")
        // router.replace("/")//This will clear the history and the user will not be able to go back once they are redirected to the home page
    }

    return (
        <div>
            <p>Order details</p>
            <button onClick={handleClick}>Place order</button>
        </div>
    )
}