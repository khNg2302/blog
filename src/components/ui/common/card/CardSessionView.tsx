import { Card, CardI, CardProps } from "./Card"
import { DisplayFullScreenMediaContent } from "../../layout/displayItem/DisplayMedia"
import { ElementType } from "@/types/element"
import { cn } from "@/lib/utils"
import { DisplayItem } from "../../layout/displayItem/DisplayItem"
import { DisplayScrollItem } from "../../layout/displayItem/DisplayScrollItem"
import { DisplayColumnCenterBox } from "../../layout/displayItem/DisplayColumnCenterBox"
import { DisplayBetweenRow } from "../../layout/displayItem/DisplayBetweenRow"



type CardSessionViewI = ElementType<CardI>

export const CardSessionView = ({ children, className }: CardSessionViewI) => {



    return <>
        <DisplayItem className={cn("h-full", className)}>

            {children}



        </DisplayItem>
    </>
}

const CardSessionViewContent = ({ children, isPortrait }: ElementType<unknown> & CardProps) => {
    return <>
        <Card.Content isPortrait={isPortrait}>

            <DisplayScrollItem>
                {children}

            </DisplayScrollItem>
        </Card.Content>
    </>
}

const CardSessionViewContentCaption = ({ isPortrait, children }: ElementType<unknown> & CardProps) => {
    return <>
        {isPortrait ? children :
            <DisplayFullScreenMediaContent>
                {children}
            </DisplayFullScreenMediaContent>
        }
    </>
}

const CardSessionViewFooter = ({ isPortrait, children }: ElementType<unknown> & CardProps) => {
    return <>
        {isPortrait ? <DisplayBetweenRow>{children}</DisplayBetweenRow> :
            <DisplayItem className="absolute right-0">
                <DisplayColumnCenterBox>

                    {children}
                </DisplayColumnCenterBox>
            </DisplayItem>
        }
    </>
}


CardSessionView.Content = CardSessionViewContent
CardSessionView.ContentCaption = CardSessionViewContentCaption
CardSessionView.Footer = CardSessionViewFooter
