'use client'
import { useSidebar } from "@/components/ui/sidebar";
import { GroupMenuElementI } from "@/types/components/menu";
import { ElementType } from "@/types/element";
import { createContext, useContext } from "react";

const MenuItemContext = createContext<GroupMenuElementI>({})

export const MenuItemProvider = ({ children }: ElementType<unknown>) => {
    const {toggleSidebar} = useSidebar()

    const close = () => {
        toggleSidebar()
    }

    const open = ()=> {
        toggleSidebar()
    }

    const value ={
        close,
        open
    }

    return <MenuItemContext.Provider value={value}>
        {children}
    </MenuItemContext.Provider>
}

export const useMenuItem = () => {
    const context = useContext(MenuItemContext)

    return context
}