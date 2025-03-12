// THis file contains the comple of whe you want to replace the default metadata titles and set a completely different title which is independant of the template

import { Metadata } from "next"


export const metadata:Metadata = {
    title:{
        absolute:"Blog 2"
    }
}

export default function Second(){
    return <h1>Blog Second Child</h1>
}