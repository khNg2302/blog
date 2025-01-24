'use client'
import { useToast } from "@/hooks/use-toast"
import { ApiResponseCodeEnum, ApiServiceFetchType, ResponseApi } from "@/types/api"
import { useCallback, useState } from "react"

export const useFetch = <DataResponse>({ apiService }: { apiService: ApiServiceFetchType<ResponseApi<DataResponse>> }) => {
    const [loading, setLoading] = useState<boolean>(false)
    const [data, setData] = useState<null | ResponseApi<DataResponse>>(null)

    const fetchApi = useCallback(async () => {
        setLoading(true)
        const response = await apiService()
        setData({ ...response.data })
        setLoading(false)
        return { ...response.data, ...response }
    }, [apiService])

    return {
        loading,
        data,
        fetchApi
    }
}

export const useToastThenFetch = <DataResponse>({ apiService }: { apiService: ApiServiceFetchType<ResponseApi<DataResponse>> }) => {
    const { loading, data, fetchApi: fetchFromHook } = useFetch({ apiService })
    const { toast } = useToast()

    const fetchApi = useCallback(async () => {
        const { title, message, apiResponseCode } = await fetchFromHook()
        if (apiResponseCode === ApiResponseCodeEnum.API_BAD) return
        toast({
            title: title,
            description: message
        })
    }, [fetchFromHook, toast])

    return {
        loading,
        data,
        fetchApi
    }

}




