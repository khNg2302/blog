'use client'
import { createMenuStore, MenuStoreActionType, MenuStoreStateType } from "@/stores/menu";
import { ElementType } from "@/types/element";
import { usePathname } from "next/navigation";
import { createContext, Provider, useContext, useEffect, useRef } from "react";
import { StoreApi, useStore } from "zustand";

const MenuStoreContext = createContext<StoreApi<MenuStoreStateType & MenuStoreActionType> | null>(null)

export const MenuStoreProvider = ({ children }: ElementType<Provider<MenuStoreStateType & MenuStoreActionType | null>>) => {

    const pathname = usePathname()
    const storeRef = useRef<StoreApi<MenuStoreStateType & MenuStoreActionType>| null>(null)
    if (!storeRef.current) {
        storeRef.current = createMenuStore()
    }
    
    const displaySidebar = useStore(storeRef.current,(state)=>state.displaySidebar)
    
    useEffect(()=>{
        displaySidebar({pathname})
    },[pathname])

    return <MenuStoreContext.Provider value={storeRef.current}>
        {children}
    </MenuStoreContext.Provider>
}

export const useMenuStore = <T,>(selector: (state: MenuStoreStateType & MenuStoreActionType) => T) => {
    const store = useContext(MenuStoreContext)
    if (!store) throw new Error('Missing MenuContext.Provider in the tree')
    return useStore(store, selector)
}