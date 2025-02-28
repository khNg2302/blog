import { CardSessionView } from "@/components/ui/common/card/CardSessionView";
import { DefaultCard } from "@/components/ui/common/card/Default";
import { DisplayColumnItem } from "@/components/ui/layout/displayItem/DisplayColumnItem";
import { DisplayContainerItem } from "@/components/ui/layout/displayItem/DisplayContainerItem";
import { DisplayItem } from "@/components/ui/layout/displayItem/DisplayItem";
import { cn } from "@/lib/utils";
import { ChildrenPassPropsType } from "@/types/element";
import { ReactNode } from "react";

export type BlogCardI = {
  cardFooter?: ReactNode;
};

export const CardBlogFrame = ({
  cardFooter,
  children,
}: BlogCardI & {
  children: ChildrenPassPropsType<{
    isPortrait: boolean;
  }>;
}) => {
  return (
    <CardSessionView className="h-full w-full max-w-full">
      {({ isPortrait }) => (
        <>
          {children({ isPortrait })}

          {cardFooter && (
            <CardSessionView.Footer isPortrait={isPortrait}>
              {cardFooter}
            </CardSessionView.Footer>
          )}
        </>
      )}
    </CardSessionView>
  );
};

const CardBlogFrameContent = ({
  isPortrait,
  cardFiles,
  cardHeader,
  cardText,
}: {
  isPortrait: boolean;
  cardFiles: ReactNode;
  cardHeader: ReactNode;
  cardText: ReactNode;
}) => {
  return (
    <DisplayContainerItem className="h-full relative">
      <DisplayColumnItem className={cn("h-full gap-2")}>
        <DisplayItem className="flex-1 relative">{cardFiles}</DisplayItem>
        <CardSessionView.ContentCaption isPortrait={isPortrait}>
          <DisplayColumnItem className="gap-2">
            <DefaultCard.Header>{cardHeader}</DefaultCard.Header>
            {cardText}
          </DisplayColumnItem>
        </CardSessionView.ContentCaption>
      </DisplayColumnItem>
    </DisplayContainerItem>
  );
};

CardBlogFrame.Content = CardBlogFrameContent;
