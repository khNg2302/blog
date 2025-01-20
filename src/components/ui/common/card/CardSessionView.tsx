import { Card, CardI, CardProps } from "./Card"
import { DisplayFullScreenMediaContent } from "../../layout/displayItem/DisplayMedia"
import { ElementPassPropsType, ElementType, ItemType } from "@/types/element"
import { cn } from "@/lib/utils"
import { DisplayItem } from "../../layout/displayItem/DisplayItem"
import { DisplayScrollItem } from "../../layout/displayItem/DisplayScrollItem"
import { DisplayColumnCenterBox } from "../../layout/displayItem/DisplayColumnCenterBox"
import { DisplayBetweenRow } from "../../layout/displayItem/DisplayBetweenRow"
import { paddingContainerItem, xSpaceContainer } from "../../layout/displayItem/DisplayContainerItem"
import { useEffect, useRef, useState } from "react"
import _ from "lodash"

type CardSessionViewI = CardI

type CardSessionViewContentI = {
    contents: Array<ItemType & unknown>
}

export const CardSessionView = ({ children, className }: CardSessionViewI) => {
    return <Card className={className}>
        {({ isPortrait }) => (<>
            <DisplayColumnCenterBox className={cn("h-full !gap-0 relative", className)}>
                {children({ isPortrait })}
            </DisplayColumnCenterBox>

        </>)}
    </Card>
}

const CardSessionViewContent = ({ children, isPortrait, contents, className }: ElementPassPropsType<ItemType & unknown, unknown> & CardProps & CardSessionViewContentI) => {

    const [indexContents, setIndexContents] = useState<number[]>([0, 1, 2])

    const scrollElement = useRef<HTMLDivElement>(null)

    useEffect(() => {

        let currentIndexItem = 0

        const itemQuery = ({ item }: { item: ItemType }) => {
            return document.getElementById(item.id)
        }


        const itemQueries = contents.reduce((result, item, index) => {
            return { ...result, [index]: itemQuery({ item }) }
        }, {} as { [key: number]: HTMLElement | null })

        const getIndexScrollToItem = ({ up, down }: { up: boolean, down: boolean }) => {

            if (up && currentIndexItem >= 1 ) {
                return currentIndexItem - 1
            }

            if (down && currentIndexItem < contents.length - 1) {
                return currentIndexItem + 1
            }
            return currentIndexItem
        }

        const changeCurrentIndexItem = ({ indexItem }: { indexItem: number }) => {
            currentIndexItem = indexItem
        }

        const scroll = ({ indexItem }: { indexItem: number }) => {
            itemQueries[indexItem]?.scrollIntoView({ behavior: 'smooth' })
        }

        const scrollDebounce = _.debounce((e: WheelEvent) => {
            const indexScrollToItem = getIndexScrollToItem({ up: e.deltaY < 0, down: e.deltaY > 0 })
            scroll({ indexItem: indexScrollToItem })
            changeCurrentIndexItem({ indexItem: indexScrollToItem })
        }, 150)


        const handleScroll = (e: WheelEvent) => {
            scrollDebounce(e)
            e.preventDefault()
        }

        const handleArrowDownDebounce = _.debounce((e: KeyboardEvent) => {
            const indexScrollToItem = getIndexScrollToItem({ up: e.key === 'ArrowUp', down: e.key === 'ArrowDown' })
            scroll({ indexItem: indexScrollToItem })
            changeCurrentIndexItem({ indexItem: indexScrollToItem })
        }, 150)

        const handleArrowDown = (e: KeyboardEvent) => {
            handleArrowDownDebounce(e)
            e.preventDefault()
        }


        scrollElement.current?.addEventListener('wheel', handleScroll)
        window.document?.addEventListener('keydown', handleArrowDown)

        return () => {
            scrollElement.current?.removeEventListener('wheel', handleScroll)
            window.document?.removeEventListener('keydown', handleArrowDown)
        }
    }, [])

    return <>
        <Card.Content isPortrait={isPortrait} className={cn(`w-full`, className)}>

            <DisplayScrollItem ref={scrollElement}>
                {contents.map((item: ItemType) => {
                    return <DisplayItem id={item.id} key={item.id} className="h-full">
                        {children({ ...item })}
                    </DisplayItem>
                })}

            </DisplayScrollItem>
        </Card.Content>
    </>
}

const CardSessionViewContentCaption = ({ isPortrait, children }: ElementType<unknown> & CardProps) => {
    return <>
        {isPortrait ? children :
            <DisplayFullScreenMediaContent className={cn(paddingContainerItem, 'w-full')}>
                {children}
            </DisplayFullScreenMediaContent>
        }
    </>
}

const CardSessionViewFooter = ({ isPortrait, children }: ElementType<unknown> & CardProps) => {
    return <>
        {isPortrait ? <DisplayBetweenRow className="w-fit">{children}</DisplayBetweenRow> :
            <DisplayItem className={`absolute right-${xSpaceContainer} z-10`}>
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
