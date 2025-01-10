'use client'
import { useMenuStore } from "@/providers/menu"
import { useEffect } from "react"

export default function NotFound() {

    const { displaySidebar, hidden } = useMenuStore((state) => state)

    useEffect(() => {
        displaySidebar({ hidden: true })
    }, [hidden])

    return (
        <div>
            <h2>Not Found</h2>
            <p>Could not find requested resource</p>
        </div>
    )
}