'use client'
import { createTextStore, TextStoreStateType } from "@/stores/text";
import { ElementType } from "@/types/element";

import { createContext, Provider, useContext, useRef } from "react";
import { StoreApi, useStore } from "zustand";

const TextStoreContext = createContext<StoreApi<TextStoreStateType> | null>(null)

export const TextStoreProvider = ({ children }: ElementType<Provider<TextStoreStateType | null>>) => {

   
    const storeRef = useRef<StoreApi<TextStoreStateType>| null>(null)
    if (!storeRef.current) {
        storeRef.current = createTextStore()
    }
    


    return <TextStoreContext.Provider value={storeRef.current}>
        {children}
    </TextStoreContext.Provider>
}

export const useTextStore = <T,>(selector: (state: TextStoreStateType) => T) => {
    const store = useContext(TextStoreContext)
    if (!store) throw new Error('Missing TextContext.Provider in the tree')
    return useStore(store, selector)
}