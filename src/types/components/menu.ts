import { PagenameEnum } from "@/stores/menu"
import { LucideProps } from "lucide-react"
import { ForwardRefExoticComponent, RefAttributes } from "react"

export type MenuItemType = {
    title: string,
    url: string,
    icon: ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>,
    pagename: PagenameEnum
}

export type MenuItemsType = MenuItemType[]

export type GroupMenuElementI = {
    pagename?: PagenameEnum,
    close?:() =>void
    open?:()=>void
}