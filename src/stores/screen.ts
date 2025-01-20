import { createStore } from "zustand"

export type ScreenStoreStateType = {
    isMobile?: boolean
}

export type ScreenStoreActionType = {
    setScreen: (isMobile:boolean) => void
}

const initialScreenState = {
    isMobile: undefined
}

export const createScreenStore = () => {

    return createStore<ScreenStoreStateType & ScreenStoreActionType>()((set) => ({
        ...initialScreenState,
        setScreen:(isMobile)=>{
            set(()=>({
                isMobile
            }))
        }
    }))
}