'use client'
import { useMenuStore } from "@/providers/menu"
import { PagenameEnum } from "@/stores/menu"

import { useEffect } from "react"
import { DisplayContainerItemI } from "../ui/layout/displayItem/DisplayContainerItem"

type PageI = DisplayContainerItemI & {
    name: PagenameEnum
}

export const Page = ({ children, name }: PageI) => {

    const namePage = useMenuStore((state) => state.namePage)

    useEffect(() => {
        namePage({ name })
    }, [])


    return <>
        {children}</>
}