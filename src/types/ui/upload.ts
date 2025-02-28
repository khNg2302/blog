import { DetailedHTMLProps, InputHTMLAttributes } from "react";
import { ItemType } from "../element";

export type UploadType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

export type UploadedFile = ItemType & File & {
    preview: unknown
}

export type UploadHookType = {
    specifyFile?: ({ file }: { file: File }) => Omit<UploadedFile, 'id' | 'preview'>
}