//example of local, context based page not found

//we have to use this in order to use the 'usePathName' react hook
//As we cannot use props in this file, if we ant to make the page more dynamic, we will have to use hooks or other workarounds to achieve it.
"use client";


import { usePathname } from "next/navigation"
export default function NotFound(){
    const pathName = usePathname();
    const productId = pathName.split("/")[2];
    const reviewId = pathName.split("/")[4];
    return(
        <div>
            Page not found for {reviewId} for {productId}
        </div>
    )
}