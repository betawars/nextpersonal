//This is a part of an example where a deliberate delay is created in order to show the functionality of the loading.tsx
// THis can also be used to learn how a deliberate delay is created in case of rendering a page.


export default async function Blog(){
    await new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("check")
        },2000)
    })
    
    return (
        <h1>Blog Parent</h1>
    )
}