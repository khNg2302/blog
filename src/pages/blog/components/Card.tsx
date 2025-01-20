'use client'
import { GhostIconWithUnderTextAppButton } from "@/components/ui/common/button/Button"
import { CardSessionView } from "@/components/ui/common/card/CardSessionView";
import { DefaultCard } from "@/components/ui/common/card/Default"
import { Avatar, CardImage } from "@/components/ui/common/image/Image"
import { DisplayColumnItem } from "@/components/ui/layout/displayItem/DisplayColumnItem";
import { DisplayContainerItem } from "@/components/ui/layout/displayItem/DisplayContainerItem";
import { cn } from "@/lib/utils";
import { ItemType } from "@/types/element";
import { Heart, MessageCircleMore, Share2 } from 'lucide-react';

type BlogType = {
    header: string
    text: string
    image: string
} & ItemType

export type BlogCardI = {
    blogs: BlogType[]
}

export const BlogCard = ({ blogs }: BlogCardI) => {
    return <CardSessionView className="h-full w-full max-w-full">
        {({ isPortrait }) => (
            <>
                <CardSessionView.Content isPortrait={isPortrait} contents={blogs}>
                    {({ text, header }) => (

                        <DisplayContainerItem className="h-full relative">
                            <DisplayColumnItem className={cn("h-full gap-2")}>
                                <CardImage alt='blog image' src='/assists/images/logo.jpg' />
                                <CardSessionView.ContentCaption isPortrait={isPortrait}>

                                    <DisplayColumnItem className="gap-2">
                                        <DefaultCard.Header>
                                            <Avatar alt='blog image' src='/assists/images/logo.jpg' />
                                            {header}
                                        </DefaultCard.Header>
                                        {text}
                                    </DisplayColumnItem>
                                </CardSessionView.ContentCaption>
                            </DisplayColumnItem>

                        </DisplayContainerItem>
                    )}

                </CardSessionView.Content>

                {blogs?.length > 0 && <CardSessionView.Footer isPortrait={isPortrait}>
                    <>
                        <GhostIconWithUnderTextAppButton>
                            <Heart />
                            Like
                        </GhostIconWithUnderTextAppButton>
                        <GhostIconWithUnderTextAppButton>
                            <MessageCircleMore />
                            Comment
                        </GhostIconWithUnderTextAppButton>
                        <GhostIconWithUnderTextAppButton>
                            <Share2 />
                            Shared
                        </GhostIconWithUnderTextAppButton>

                    </>
                </CardSessionView.Footer>}


            </>
        )}

    </CardSessionView>
}