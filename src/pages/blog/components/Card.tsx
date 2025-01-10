'use client'
import { GhostIconWithUnderTextAppButton } from "@/components/ui/common/button/Button"
import { CardSessionView } from "@/components/ui/common/card/CardSessionView";
import { DefaultCard } from "@/components/ui/common/card/Default"
import { Avatar, CardImage } from "@/components/ui/common/image/Image"
import { DisplayColumnItem } from "@/components/ui/layout/displayItem/DisplayColumnItem";
import { Heart, MessageCircleMore, Share2 } from 'lucide-react';

type BlogType = {
    header: string
    text: string
    image: string
}

export type BlogCardI = {
    blogs: BlogType[]
}

export const BlogCard = ({ blogs }: BlogCardI) => {
    return <CardSessionView className="h-full w-auto aspect-[9/6] max-w-full">
        <DefaultCard>
            {({ isPortrait }) => (
                <>
                    <CardSessionView.Content isPortrait={isPortrait}>
                        {blogs?.map((blog,index) => {
                            return <DisplayColumnItem key={index} className="h-full relative">
                                <CardImage alt='blog image' src='/assists/images/logo.jpg' />
                                <CardSessionView.ContentCaption isPortrait={isPortrait}>
                                    <DefaultCard.Header>
                                        <Avatar alt='blog image' src='/assists/images/logo.jpg' />
                                        {blog.header}
                                    </DefaultCard.Header>
                                    <DisplayColumnItem>
                                        {blog.text}
                                    </DisplayColumnItem>
                                </CardSessionView.ContentCaption>
                            </DisplayColumnItem>
                        })}

                    </CardSessionView.Content>

                    {blogs?.length > 0 && <CardSessionView.Footer isPortrait={isPortrait}>
                        <>
                            <GhostIconWithUnderTextAppButton>
                                <Heart />
                                Like
                            </GhostIconWithUnderTextAppButton>
                            <GhostIconWithUnderTextAppButton>
                                <MessageCircleMore />
                                Like
                            </GhostIconWithUnderTextAppButton>
                            <GhostIconWithUnderTextAppButton>
                                <Share2 />
                                Like
                            </GhostIconWithUnderTextAppButton>

                        </>
                    </CardSessionView.Footer>}


                </>
            )}
        </DefaultCard>
    </CardSessionView>
}