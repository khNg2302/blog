'use client'
import { useToastThenFetch } from "@/api/hooks/fetch"
import { ApiServiceFetchType, ResponseApi } from "@/types/api"
import { ItemType } from "@/types/element"
import { useEffect, useRef, useState } from "react"

type ListResponse = {
    data: ItemType[],
    morePage: number
    moreCount: number
    count: number
}

interface UseGetListI {
    apiService: (props: unknown) => ApiServiceFetchType<ResponseApi<ListResponse>>
}

export const useGetList = ({ apiService }: UseGetListI) => {
    const pageListsFetch = useRef<(ItemType[] | undefined)[]>([])
    const [pageLists, setPageLists] = useState<(ItemType[] | undefined)[]>([])
    const [pageList, setPageList] = useState<ItemType[]>([])
    const [page, setPage] = useState<number | undefined>(undefined)
    const [morePage, setMorePage] = useState<number | undefined>(undefined)
    const [moreCount, setMoreCount] = useState<number | undefined>(undefined)
    const { loading, fetchApi, data } = useToastThenFetch<ListResponse>({ apiService: apiService({ page }) })
    const getList = async () => {
        if (page) fetchApi()
    }



    const changePageListWithFetchPage = ({ page }: { page: number }) => {
        setPageList(pageListsFetch.current[page] ?? [])

    }

    const checkPageFetch = ({ page }: { page: number }) => {
        return pageLists[page] !== undefined
    }
    const addListToNotOldLists = ({ length, page, list }: { length: number, page: number, list: ItemType[] }) => {
        return Array.from({ length: length }).map((_, pageIndex: number) => {
            if (pageIndex === page - 1) { return list }
            return undefined
        })
    }
    const defineLists = ({ oldLists, list, page, length }: { oldLists: (ItemType[] | undefined)[], list: ItemType[], page: number, length: number }) => {
        if (!oldLists) {
            return addListToNotOldLists({ list, page, length })
        }

        const oldLength = oldLists.length
        const extraItems = length - oldLength
        const pageOfExtraItems = page - oldLength
        return [...oldLists, ...addListToNotOldLists({ list, page: pageOfExtraItems, length: extraItems })]
    }
    const addPageToLists = ({ page, list }: { page: number, list: ItemType[] }) => {
        const getLengthNewLists = ({ page }: { page: number }) => {
            const oldListsLength = pageLists.length
            const pageIsGreaterThanOldLength = page > oldListsLength
            return {
                pageIsGreaterThanOldLength,
                length: pageIsGreaterThanOldLength ? page : oldListsLength
            }
        }
        const addListToNewLists = ({ page, list }: { page: number, list: ItemType[] }) => {
            const addListToExistIndexOldList = () => {
                const newList = pageLists
                newList[page] = list
                return newList
            }
            const { length, pageIsGreaterThanOldLength } = getLengthNewLists({ page })
            const addListToNotExistIndexOldList = () => {
                return defineLists({ oldLists: pageLists, list, page, length })
            }
            if (pageIsGreaterThanOldLength) {
                return addListToNotExistIndexOldList()
            }
            return addListToExistIndexOldList()
        }

        return addListToNewLists({ page, list })

    }


    const changePageListsWithFetchPage = ({ page }: { page: number }) => {
        const slicePageListsFromStartToPage = pageListsFetch.current.slice(0, page)
        return setPageLists([...slicePageListsFromStartToPage])

    }
    const changePageListsWithNotFetchPage = ({ page }: { page: number }) => {
        return setPageLists(addPageToLists({ page, list: data?.data.data ?? [] }))
    }



    const changePage = ({ page }: { page: number }) => {
        const pageFetch = checkPageFetch({ page })
        setPage(page)

        if (pageFetch) {
            changePageListWithFetchPage({ page })
            changePageListsWithFetchPage({ page })
            return
        }
        return getList()
    }

    useEffect(() => {
        if (!page) return
        setPageList(data?.data.data ?? [])
        changePageListsWithNotFetchPage({ page })
        setMorePage(data?.data.morePage)
        setMoreCount(data?.data.moreCount)
    }, [data])

    useEffect(() => {
        pageListsFetch.current = pageLists
    }, [pageLists])

    return {
        pageLists,
        pageList,
        page,
        morePage,
        moreCount,
        loading,
        changePage
    }
}