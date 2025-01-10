import { createStore } from 'zustand'

export type TextStoreStateType = {
    test: boolean
}

const initialMenuState = {
    test: true
}

export const createTextStore = () => {

   
    return createStore<TextStoreStateType>()(() => ({
        ...initialMenuState,
        
    }))
}


