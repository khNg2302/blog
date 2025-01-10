import { cn } from "@/lib/utils"
import { DisplayColumnItem, DisplayColumnItemI } from "./DisplayColumnItem"

type DisplayColumnCenterBoxI = DisplayColumnItemI

export const DisplayColumnCenterBox = ({ children, className }: DisplayColumnCenterBoxI) => {
    return <DisplayColumnItem className={cn(className,'justify-center items-center gap-2 m-auto')}>
        {children}
    </DisplayColumnItem>
} 