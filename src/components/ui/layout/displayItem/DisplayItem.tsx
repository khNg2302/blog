import { ElementType } from "@/types/element"

export type DisplayItemI =  ElementType<HTMLDivElement>

export const DisplayItem = ({ children , ...props}:DisplayItemI) => {
    return <div {...props}>
        {children}
    </div>
}