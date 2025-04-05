import { CgHome } from "react-icons/cg";
import Navbar from "../components/navbar";
import React from 'react'
import '../globals.css'
export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <main className="font-work-sans">
            <Navbar />
            {children}
        </main>
    )
}