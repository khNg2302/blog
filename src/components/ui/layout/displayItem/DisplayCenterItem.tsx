import { cn } from "@/lib/utils"
import { DisplayItem, DisplayItemI } from "./DisplayItem"

export type DisplayCenterItemI = DisplayItemI

export const DisplayCenterItem = ({ children, className,...props }: DisplayCenterItemI) => {
    return <DisplayItem {...props} className={cn(className, 'flex justify-center items-center')}>
        {children}
    </DisplayItem>
}