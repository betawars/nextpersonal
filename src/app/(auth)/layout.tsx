//This is an example for implementing an active links based on the pathnames
// THis layout file can be renamed as template.tsx which will make it change it's behavior to 
// - Get a fresh start on every page under the navigation, A new template instance is mounted, DOM elements are recreated, State is cleared
"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import "./styles.css"
import { useState } from "react";

const navLinks = [
    { name: "Register", href:"/register"},
    { name: "Login", href:"/login"},
    { name: "Forgot Password", href:"/forgot-password"},
]

export default function AuthLayout({
    children,
}: {
    children:React.ReactNode;
}) {
    const pathname = usePathname();
    const [input,setInput] = useState("")
    return(
        <div>
            <input value={input} onChange={(e)=>setInput(e.target.value)}></input>
            {navLinks.map((link)=>{
                const isActive = 
                pathname === link.href ||
                (pathname.startsWith(link.href) && link.href!=="/");
                return(
                    <Link
                        className={isActive?"font-bold mr-4":"text-blue-500 mr-4"}
                        href = {link.href}
                        key = {link.name}
                    >
                        {link.name}
                    </Link>
                )
            })}
            {children}
        </div>
    )
}