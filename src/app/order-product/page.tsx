import { Metadata } from "next";
import OrderDetails from "./orderDetails";
export const metadata:Metadata = {
    title:{
        absolute:"Order Details"
    }
}
export default function OrderHome(){
    return(
        <OrderDetails/>
    )
}