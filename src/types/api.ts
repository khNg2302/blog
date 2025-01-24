import { AxiosResponse } from "axios";

export type ApiServiceFetchType<T> = () => Promise<AxiosResponse<T>>

export type StateResponseType = {
    success: boolean,
    title: string
    message: string,
    apiResponseCode: ApiResponseCodeEnum
}

export type ResponseApi<T> = {
    [name: string]: T,
} & StateResponseType


export enum ApiResponseCodeEnum {
    "API_BAD" = "API_BAD",
    "API_GOOD" = "API_GOOD",
    "ERR_BAD_REQUEST" = "ERR_BAD_REQUEST"
}

export type ApiServiceBulkFetchType = ApiServiceFetchType<unknown>[]