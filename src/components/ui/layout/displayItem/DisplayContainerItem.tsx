import { cn } from "@/lib/utils"
import { DisplayItem, DisplayItemI } from "./DisplayItem"

export const paddingContainerItem = 'px-4 py-2'
export const marginContainerItemWhenExtraPadding = '-mx-4 -my-2'
export const insetContainerItemWhenExtraPadding = '-left-4 -right-4 -top-2 -bottom-2'
export const xSpaceContainer = '4'

export type DisplayContainerItemI = DisplayItemI

export const DisplayContainerItem = ({ children, className, ...props }: DisplayContainerItemI) => {
    return <DisplayItem className={cn(`${paddingContainerItem}`, className)} {...props}>{children}</DisplayItem>
}