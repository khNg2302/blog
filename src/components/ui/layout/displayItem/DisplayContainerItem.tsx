import { cn } from "@/lib/utils"
import { DisplayItem, DisplayItemI } from "./DisplayItem"

export type DisplayContainerItemI = DisplayItemI
export const DisplayContainerItem = ({children,className,...props}:DisplayContainerItemI) => {
    return <DisplayItem className={cn(className,'px-4 py-2')} {...props}>{children}</DisplayItem>
}