'use client'
import { useMenuStore } from "@/providers/menu"
import { PagenameEnum } from "@/stores/menu"

import { useEffect } from "react"
import { DisplayContainerItem, DisplayContainerItemI } from "../ui/layout/displayItem/DisplayContainerItem"

type PageI = DisplayContainerItemI & {
    name: PagenameEnum
}

export const Page = ({ children, name, ...props }: PageI) => {

    const namePage = useMenuStore((state) => state.namePage)

    useEffect(() => {
        namePage({ name })
    }, [])


    return <DisplayContainerItem {...props}>
        {children}</DisplayContainerItem>
}