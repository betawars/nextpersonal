"use client"

// This is an example of the error file that will be displayed whenever there is an error encountered in the adjacent and the children page
// error.jsx should always use use client directive

export default function ErrorBoundary({error}:{error:Error}
){
    return <div>{error.message}</div>
}