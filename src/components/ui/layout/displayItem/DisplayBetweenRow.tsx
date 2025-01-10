import { cn } from "@/lib/utils"
import { DisplayItemI } from "./DisplayItem"
import { DisplayRowItem } from "./DisplayItemRowItem"

export const DisplayBetweenRow = ({children,className,...props}:DisplayItemI) =>{
    return <DisplayRowItem {...props} className={cn('justify-between',className)}>
        {children}
    </DisplayRowItem>
}