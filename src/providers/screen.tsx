'use client'
import { useIsMobile } from "@/hooks/use-mobile";
import { createScreenStore, ScreenStoreActionType, ScreenStoreStateType } from "@/stores/screen";
import { ElementType } from "@/types/element";
import { createContext, useContext, useEffect, useRef } from "react";
import { StoreApi, useStore } from "zustand";

export type ScreenValue = {
    isMobile: boolean | undefined
}

const ScreenContext = createContext<StoreApi<ScreenStoreStateType & ScreenStoreActionType>| null>(null)

export const ScreenProvider = ({ children }: ElementType<unknown>) => {
    const isMobile = useIsMobile()

     const storeRef = useRef<StoreApi<ScreenStoreStateType & ScreenStoreActionType>| null>(null)
        if (!storeRef.current) {
            storeRef.current = createScreenStore()
        }

    const setScreen = useStore(storeRef.current,state=>state.setScreen)

    useEffect(()=>{
        setScreen(isMobile)
    },[isMobile])

    const value ={
       ...storeRef.current
    }

    return <ScreenContext.Provider value={value}>
        

        {children}
    </ScreenContext.Provider>
}


export const useScreenStore = <T,>(selector: (state: ScreenStoreStateType & ScreenStoreActionType) => T) => {
    const store = useContext(ScreenContext)
    if (!store) throw new Error('Missing ScreenContext.Provider in the tree')
    return useStore(store, selector)
}