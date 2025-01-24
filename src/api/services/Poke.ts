import { getApi } from "../axios/methods"

export const getAllPoke = () => {
    return getApi("/test")
}