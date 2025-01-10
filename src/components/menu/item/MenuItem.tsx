'use client'
import { SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar"
import { cn } from "@/lib/utils"
import { useMenuItem } from "@/providers/menuItem"

import { MenuItemType } from "@/types/components/menu"
import Link from "next/link"


type MenuItemI = {
    item: MenuItemType
    activeClassName?: string
    active: boolean

}

export const MenuItem = ({ item, activeClassName = '', active }: MenuItemI) => {
    const { close } = useMenuItem()

    return <SidebarMenuItem key={item.title}>
        <SidebarMenuButton onClick={close} asChild className={cn({ [activeClassName]: active, "bg-sky-200 hover:bg-sky-200 font-bold": active })}>
            <Link href={item.url}>
                <item.icon />
                <span>{item.title}</span>
            </Link>
        </SidebarMenuButton>
    </SidebarMenuItem>
}