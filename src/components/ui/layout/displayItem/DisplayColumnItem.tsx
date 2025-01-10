import { cn } from "@/lib/utils"
import { DisplayItem, DisplayItemI } from "./DisplayItem"

export type DisplayColumnItemI = DisplayItemI
export const DisplayColumnItem = ({children,className,...props}:DisplayColumnItemI) => {
    return <DisplayItem className={cn('flex flex-col',className)} {...props}>{children}</DisplayItem>
}