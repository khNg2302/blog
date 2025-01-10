'use client'
import { SidebarTrigger } from "@/components/ui/sidebar"
import { useMenuStore } from "@/providers/menu"
import { useMenuItem } from "@/providers/menuItem"

export const MenuTrigger = () => {
    const {hidden} = useMenuStore((state) => state)
    const {open} = useMenuItem()
    return <>
     {!hidden && <SidebarTrigger onClick={open}  />}
    </>
}