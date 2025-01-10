import { cn } from "@/lib/utils"
import { DisplayItem, DisplayItemI } from "./DisplayItem"

export type DisplayScrollItemI = DisplayItemI & {
    overflowBoxClassname?: string
    displayItemClassname?: string
}

export const DisplayScrollItem = ({ children, displayItemClassname, overflowBoxClassname }: DisplayScrollItemI) => {
    return <DisplayItem className={cn("overflow-auto flex-1 w-full", overflowBoxClassname)}>
        <DisplayItem className={cn(displayItemClassname, 'w-full h-full')}>{children}</DisplayItem>
    </DisplayItem>
}