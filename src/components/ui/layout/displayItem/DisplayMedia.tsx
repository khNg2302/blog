import { cn } from "@/lib/utils"
import { DisplayItem, DisplayItemI } from "./DisplayItem"
import { ElementType } from "@/types/element"
import { DisplayColumnItem } from "./DisplayColumnItem"
import { DisplayScrollItem } from "./DisplayScrollItem"

export const DisplayMedia = ({ children, ...props }: DisplayItemI) => {
    return <DisplayItem {...props}>
        {children}
    </DisplayItem>
}

export const DisplayFullScreenMedia = ({ children, className }: DisplayItemI) => {
    return <DisplayMedia className={cn("w-full h-full absolute inset-0", className)}>
        {children}
    </DisplayMedia>
}


export const DisplayFullScreenMediaContent = ({ children }: ElementType<unknown>) => {
    return <DisplayColumnItem className="absolute bottom-0 left-0 right-0 z-10 bg-white/30 max-h-full">
        <DisplayScrollItem>

            {children}
        </DisplayScrollItem>
    </DisplayColumnItem>
}

DisplayFullScreenMedia.Content = DisplayFullScreenMediaContent
