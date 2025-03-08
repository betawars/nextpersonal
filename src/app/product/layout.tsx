// This example is for the nested layout concept
// From this route and further, all the routes will have this layout addition tothe previous applied layouts

import React from "react";

export default function ProductLayout({
    children
}:{
    children:React.ReactNode;
}){
    return(
        <>
            {children}
            <h2>Featured products</h2>
        </>
    )
}