"use client";
import { GhostIconWithUnderTextAppButton } from "@/components/ui/common/button/Button";
import { CardSessionView } from "@/components/ui/common/card/CardSessionView";
import { DisplayPhotos } from "@/components/ui/common/files/photos";
import { Avatar } from "@/components/ui/common/image/Image";
import { DisplayItem } from "@/components/ui/layout/displayItem/DisplayItem";
import { CardBlogFrame } from "@/feature/blog/CardBlogFrame";

import { ChildrenPassPropsType, ItemType } from "@/types/element";
import { MessageCircleMore, Share2 } from "lucide-react";
import { ReactNode, useState } from "react";
import { useSessionViewProvider } from "@/providers/sessionView";
import { LikeButton } from "@/components/ui/common/button/Like";

type BlogType = {
  header: string;
  text: string;
  image: string;
} & ItemType;

export type BlogCardI = {
  blogs: BlogType[];
  commentComp: ReactNode;
  likeComp: ReactNode;
  shareComp: ReactNode;
};

const BlogPrefix = "blog";

export const BlogCard = ({
  blogs,
  commentComp,
  likeComp,
  shareComp,
}: BlogCardI) => {
  const [currentBlog, setCurrentBlog] = useState(BlogPrefix + "0");
  const { setContentDisplay } = useSessionViewProvider();

  const openComment = () => {
    setContentDisplay(commentComp);
  };

  const openLike = () => {
    setContentDisplay(likeComp);
  };

  const openShare = () => {
    setContentDisplay(shareComp);
  };

  const CardFooter = () => {
    return (
      <>
        {blogs?.length > 0 && (
          <>
            <GhostIconWithUnderTextAppButton onClick={openLike}>
              <LikeButton isLiked />
              Like
            </GhostIconWithUnderTextAppButton>
            <GhostIconWithUnderTextAppButton onClick={openComment}>
              <MessageCircleMore />
              Comment
            </GhostIconWithUnderTextAppButton>
            <GhostIconWithUnderTextAppButton onClick={openShare}>
              <Share2 />
              Shared
            </GhostIconWithUnderTextAppButton>
          </>
        )}
      </>
    );
  };

  const content = ({ isPortrait }: { isPortrait: boolean }) => {
    const renderContent: ChildrenPassPropsType<BlogType> = ({
      header,
      text,
      prefixItem,
    }) => (
      <>
        <CardBlogFrame.Content
          isPortrait={isPortrait}
          cardText={text}
          cardFiles={
            <DisplayPhotos
              onSetCurrentId={() => {}}
              currentParentId={currentBlog}
              prefixItem={"photos-blog" + prefixItem}
              parentId={prefixItem as string}
              photos={[
                { id: "1", src: "/assists/images/logo.jpg" },
                { id: "2", src: "/assists/images/logo.jpg" },
              ]}
              isPortrait={isPortrait}
            />
          }
          cardHeader={
            <>
              <Avatar alt="blog image" src="/assists/images/logo.jpg" />
              <DisplayItem>{header}</DisplayItem>
            </>
          }
        ></CardBlogFrame.Content>
      </>
    );
    return renderContent;
  };

  const handleSetCurrentBlog = (currentBlogId: string) => {
    setCurrentBlog(currentBlogId);
  };

  return (
    <CardBlogFrame cardFooter={<CardFooter />}>
      {({ isPortrait }) => (
        <>
          <CardSessionView.Content
            isPortrait={isPortrait}
            contents={blogs}
            prefixItem={BlogPrefix}
            currentParentId={""}
            parentId=""
            onSetCurrentId={handleSetCurrentBlog}
          >
            {content({ isPortrait })}
          </CardSessionView.Content>
        </>
      )}
    </CardBlogFrame>
  );
};
