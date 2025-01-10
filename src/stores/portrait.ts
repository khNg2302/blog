import { createStore } from 'zustand'

export type PortraitStoreStateType = {
    isPortrait:boolean | undefined
}

const initialPortraitState = {
    isPortrait: false
}

export const createPortraitStore = () => {

   
    return createStore<PortraitStoreStateType>()(() => ({
        ...initialPortraitState,  
    }))
}