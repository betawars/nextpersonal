//This is an example for the folders which are ignored by nextjs routing 
//To make a folder to be ignored by nextjs routing, just add _ infront of the name
// Private folders are super useful for a bunch of things:
// - Keeping your UI logic separate from routing logic
// - Having a consistent way to organize internal files in your project
// - Making it easier to group related files in your code editor
// - Avoiding potential naming conflicts with future Next.js file naming conventions
// If you actually want an underscore in your URL , use "%5F" instead. That's just
// the URL-encoded version of an underscore.
export default function PrivateFunction(){
    return <h1>Private page</h1>
}

