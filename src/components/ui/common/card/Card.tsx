'use client'
import { ElementPassPropsType, ElementType } from "@/types/element"
import { DisplayColumnItem } from "../../layout/displayItem/DisplayColumnItem"
import { cn } from "@/lib/utils"
import { usePortraitStore } from "@/providers/portrait"
import { DisplayCenterItem } from "../../layout/displayItem/DisplayCenterItem"
import { DisplayFullScreenMedia } from "../../layout/displayItem/DisplayMedia"

export type CardProps = {
    isPortrait: boolean
}

export type CardI = ElementPassPropsType<CardProps, unknown>

export const Card = ({ children, className }: CardI) => {
    const { isPortrait } = usePortraitStore()

    if (isPortrait === undefined) return null

    return isPortrait ? <DisplayColumnItem className={cn("w-full gap-4 h-full", className)}>
        {children({ isPortrait })}
    </DisplayColumnItem> : <DisplayCenterItem className="w-full h-full relative"> {children({ isPortrait })} </DisplayCenterItem>
}

const CardHeader = ({ children }: ElementType<unknown>) => {
    return <>
        {children}
    </>
}
const CardContent = ({ children, className, isPortrait }: ElementType<unknown> & CardProps) => {
    return isPortrait ? <DisplayColumnItem className={cn("flex-1 gap-2", className)}>
        {children}
    </DisplayColumnItem> : <DisplayFullScreenMedia className={cn(className)}>
        <DisplayColumnItem className={cn("h-full w-full")}>
            {children}

        </DisplayColumnItem>
    </DisplayFullScreenMedia>
}
const CardFooter = ({ children }: ElementType<unknown>) => {
    return <DisplayColumnItem>
        {children}
    </DisplayColumnItem>
}

Card.Header = CardHeader
Card.Content = CardContent
Card.Footer = CardFooter