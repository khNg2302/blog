import { UploadedFile, UploadHookType } from "@/types/ui/upload"
import { useState } from "react"

export const useUpload = ({ specifyFile }: UploadHookType) => {
    const [files, setFiles] = useState<UploadedFile[]>([])
    const specifiedFiles = [] as UploadedFile[]
    const changeFiles = ({ files }: { files: FileList }) => {
        for (let i = 0; i < files.length; i++) {
            const specifiedFile = specifyFile ? specifyFile({ file: files[i] }) : files[i]
            const URLFile = URL.createObjectURL(specifiedFile)
            specifiedFiles.push({
                ...specifiedFile,
                id: new Date().toISOString(),
                preview: URLFile
            })
            URL.revokeObjectURL(URLFile)
        }
    }
    const setSpecifiedFiles = () => {
        setFiles([...specifiedFiles])
    }
    return { files, changeFiles, setSpecifiedFiles }
}