import { api } from "./config"

export const getApi = (url: string) => {
    return api.get(url, {})
}

export const createApi = () => {
    return api.post('url', {}, {})
}
