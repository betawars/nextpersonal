"use client"

import { useRouter } from "next/navigation";
import { startTransition } from "react";

// This is an example of the error file that will be displayed whenever there is an error encountered in the adjacent and the children page
// error.jsx should always use use client directive


//Exp2
//In case if you want to set up the retry button to setp the page to retry after failing to load
// use the following code
export default function ErrorBoundary({error, reset,}:{
    error:Error
    reset:()=>void;
}
){
    //This chunk of code is used to refresh the code which is from the serverside
    //as the reset prop can only refresh the client side pages
    const router = useRouter()
    const reload = () =>{
        startTransition(()=>{
            router.refresh();
            reset();
        })
    }
    return (<div>

        <p>{error.message}</p>
        <button onClick={()=>reload()}>Try again</button>
        </div>)
}