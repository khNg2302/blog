'use client'
import { usePortrait } from "@/hooks/use-portrait";
import { ElementType } from "@/types/element";
import { createContext, useContext } from "react";

export type PortraitValue = {
    isPortrait: boolean | undefined
}

const PortraitContext = createContext<PortraitValue>({
    isPortrait:undefined
})

export const PortraitProvider = ({ children }: ElementType<unknown>) => {
    const {isPortrait} = usePortrait()

    const value ={
        isPortrait
    }

    return <PortraitContext.Provider value={value}>
        

        {children}
    </PortraitContext.Provider>
} 

export const usePortraitStore = () => {
    const value = useContext(PortraitContext)

    return value
}