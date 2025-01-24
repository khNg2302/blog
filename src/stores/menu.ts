import { createStore } from 'zustand'

export enum PagenameEnum {
    blog = "blog",
    home = "home",
    messenger = "messenger"
}

export enum PathnameEnum {
    create_blog = "create_blog"
}

export type MenuStoreStateType = {
    hidden?: boolean
    pagename?: PagenameEnum
    pathnamePage?: PathnameEnum
}


type DisplaySidebarHandlerParamsType = {
    hidden?: boolean,
    pathname?: string | null
}


type NamePageParamsType = {
    name: PagenameEnum
}

type NamePathPageParamsType = {
    path: PathnameEnum
}

export type MenuStoreActionType = {
    displaySidebar: (params: DisplaySidebarHandlerParamsType) => void
    namePage: ({ name }: NamePageParamsType) => void
    namePathPage: ({ path }: NamePathPageParamsType) => void
}

const initialMenuState = {
    hidden: true,
    pageName: undefined,
    pathnamePage: undefined

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

    const pathnamePage = ({ path }: NamePathPageParamsType) => {
        return path
    }

    const resetPathnamePage = () => {

        return undefined
    }



    return createStore<MenuStoreStateType & MenuStoreActionType>()((set, get) => ({
        ...initialMenuState,
        displaySidebar: ({ hidden, pathname }) => {
            set({ hidden: displaySidebar({ hidden, pathname }) })
        },

        namePage: ({ name }) => {
            const { pagename } = get()
            set({
                pagename: namePage({ name }),
            })
            if (pagename) {
                set({
                    pathnamePage: resetPathnamePage()
                })
            }
        },

        namePathPage: ({ path }) => {
            set({ pathnamePage: pathnamePage({ path }) })
        }
    }))
}


