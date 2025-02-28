import { useUpload } from "."
export const useUploadPhotos = () => {
    const { files, changeFiles, setSpecifiedFiles } = useUpload({})
    return { files, changeFiles, setSpecifiedFiles }
}