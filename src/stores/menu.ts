import { createStore } from 'zustand'

export enum PagenameEnum {
    blog = "blog",
    home = "home",
    messenger = "messenger"
}

export type MenuStoreStateType = {
    hidden?: boolean
    pagename?: PagenameEnum
}


type DisplaySidebarHandlerParamsType = {
    hidden?: boolean,
    pathname?: string | null
}


type NamePageParamsType = {
    name: PagenameEnum
}

export type MenuStoreActionType = {
    displaySidebar: (params: DisplaySidebarHandlerParamsType) => void
    namePage: ({ name }: NamePageParamsType) => void

}

const initialMenuState = {
    hidden: true,
    pageName: undefined,

}

export const createMenuStore = () => {

    const pathnameHiddenSidebar = ({ pathname }: { pathname: string }) => {
        const nonDisplayPathname = ["/"]
        return nonDisplayPathname.includes(pathname)
    }

    const hiddenSidebar = (hidden: boolean) => {
        return hidden
    }

    const displaySidebar = ({ hidden, pathname }: DisplaySidebarHandlerParamsType): boolean => {
        return hidden !== undefined ? hiddenSidebar(hidden) : pathname ? pathnameHiddenSidebar({ pathname }) : true
    }

    const namePage = ({ name }: NamePageParamsType) => {
        return name
    }



    return createStore<MenuStoreStateType & MenuStoreActionType>()((set) => ({
        ...initialMenuState,
        displaySidebar: ({ hidden, pathname }) => {

            set({ hidden: displaySidebar({ hidden, pathname }) })
        },

        namePage: ({ name }) => {
            set({ pagename: namePage({ name }) })
        },

    }))
}


