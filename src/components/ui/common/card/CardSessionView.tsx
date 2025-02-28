import { Card, CardI, CardProps } from "./Card";
import { DisplayFullScreenMediaContent } from "../../layout/displayItem/DisplayMedia";
import { ChildrenPassPropsType, ElementType, ItemType } from "@/types/element";
import { cn } from "@/lib/utils";
import { DisplayItem } from "../../layout/displayItem/DisplayItem";
import { DisplayScrollItem } from "../../layout/displayItem/DisplayScrollItem";
import { DisplayColumnCenterBox } from "../../layout/displayItem/DisplayColumnCenterBox";
import { DisplayBetweenRow } from "../../layout/displayItem/DisplayBetweenRow";
import {
  paddingContainerItem,
  xSpaceContainer,
} from "../../layout/displayItem/DisplayContainerItem";
import { ReactNode, useEffect, useRef } from "react";
import { useScroll } from "@/hooks/use-scroll";
import { useSessionViewProvider } from "@/providers/sessionView";
import { FooterDrawer } from "../footerDrawer";

type CardSessionViewI = CardI;

type CardSessionViewContentI = {
  contents: Array<ItemType & unknown>;
  prefixItem: string;
  currentParentId: string;
  parentId: string;
  children: ReactNode | ChildrenPassPropsType<ItemType & unknown>;
  onSetCurrentId: (currentId: string) => void;
};

export const CardSessionView = ({ children, className }: CardSessionViewI) => {
  return (
    <Card className={className}>
      {({ isPortrait }) => (
        <>
          <DisplayColumnCenterBox
            className={cn("h-full !gap-0 relative", className)}
          >
            {children({ isPortrait })}
          </DisplayColumnCenterBox>
        </>
      )}
    </Card>
  );
};

const CardSessionViewContentFrame = ({
  children,
  isPortrait,
  contents,
  className,
  prefixItem,
  currentParentId,
  parentId,
  ref,
}: ElementType<HTMLDivElement> &
  CardProps &
  Omit<CardSessionViewContentI, "onSetCurrentId">) => {
  const contentList = contents.length ? contents : null;

  return (
    <>
      <Card.Content isPortrait={isPortrait} className={cn(`w-full`, className)}>
        <DisplayScrollItem
          ref={ref}
          overflowBoxClassname="!overflow-hidden relative"
        >
          {!contentList ? (
            (children as ReactNode)
          ) : (
            <>
              {contents?.map((item: ItemType) => {
                return (
                  <DisplayItem
                    id={prefixItem + item.id}
                    key={item.id}
                    className="h-full verticalScrollItem"
                  >
                    {(children as ChildrenPassPropsType<ItemType & unknown>)({
                      ...item,
                      prefixItem: prefixItem + item.id,
                      currentParentId,
                      parentId,
                    })}
                  </DisplayItem>
                );
              })}
            </>
          )}
        </DisplayScrollItem>
        {!isPortrait && <FooterContentDrawer />}
      </Card.Content>
    </>
  );
};

const CardSessionViewContent = ({
  children,
  isPortrait,
  contents,
  className,
  prefixItem,
  parentId,
  onSetCurrentId,
  currentParentId,
}: ElementType<HTMLDivElement> & CardProps & CardSessionViewContentI) => {
  const scrollElement = useRef<HTMLDivElement>(null);

  const { scrollDebounce, itemQueries, currentIndexItem } = useScroll({
    contents,
    prefixItem,
    onSetCurrentId,
  });

  useEffect(() => {
    const handleScroll = (e: WheelEvent) => {
      scrollDebounce({ desc: e.deltaY < 0, asc: e.deltaY > 0 });
      e.preventDefault();
    };

    const handleArrowDown = (e: KeyboardEvent) => {
      if (
        (e.key === "ArrowUp" || e.key === "ArrowDown") &&
        (currentParentId ? currentParentId === parentId : true)
      ) {
        scrollDebounce({
          desc: e.key === "ArrowUp",
          asc: e.key === "ArrowDown",
        });
        e.preventDefault();
      }
    };

    const scrollElementValue = scrollElement.current;
    scrollElementValue?.addEventListener("wheel", handleScroll);
    window.document?.addEventListener("keydown", handleArrowDown);

    return () => {
      scrollElementValue?.removeEventListener("wheel", handleScroll);
      window.document?.removeEventListener("keydown", handleArrowDown);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [contents, currentParentId, itemQueries, currentIndexItem]);

  return (
    <CardSessionViewContentFrame
      contents={contents}
      isPortrait={isPortrait}
      className={className}
      ref={scrollElement}
      prefixItem={prefixItem}
      currentParentId={currentParentId}
      parentId={parentId}
    >
      {children}
    </CardSessionViewContentFrame>
  );
};

const CardSessionViewContentWidthFrame = ({
  children,
  isPortrait,
  contents,
  className,
  prefixItem,
  currentParentId,
  ref,
}: ElementType<HTMLDivElement> &
  CardProps &
  Omit<CardSessionViewContentI, "onSetCurrentId">) => {
  const contentList = contents.length ? contents : null;

  return (
    <>
      <Card.Content isPortrait={isPortrait} className={cn(`w-full`, className)}>
        <DisplayScrollItem
          ref={ref}
          displayItemClassname={"flex"}
          overflowBoxClassname="overflow-hidden relative"
        >
          {!contentList ? (
            (children as ReactNode)
          ) : (
            <>
              {contents?.map((item: ItemType) => {
                return (
                  <DisplayItem
                    className="basis-[100%] flex-shrink-0 widthScrollItem"
                    id={prefixItem + item.id}
                    key={item.id}
                  >
                    {(children as ChildrenPassPropsType<ItemType & unknown>)({
                      ...item,
                      id: prefixItem + item.id,
                      currentParentId,
                    })}
                  </DisplayItem>
                );
              })}
            </>
          )}
        </DisplayScrollItem>
      </Card.Content>
    </>
  );
};

export const CardSessionViewContentWidth = ({
  children,
  isPortrait,
  contents,
  prefixItem,
  currentParentId,
  onSetCurrentId,
  parentId,
  className,
}: ElementType<HTMLDivElement> & CardProps & CardSessionViewContentI) => {
  const { scrollDebounce, itemQueries, currentIndexItem } = useScroll({
    contents,
    prefixItem,
    onSetCurrentId,
  });

  useEffect(() => {
    const handleScroll = (
      { desc, asc }: { desc: boolean; asc: boolean },
      e?: Event
    ) => {
      scrollDebounce({ desc, asc });
      e?.preventDefault();
    };

    const handleScrollKey = (e: KeyboardEvent) => {
      if (
        (e.key === "ArrowLeft" || e.key === "ArrowRight") &&
        (currentParentId ? currentParentId === parentId : true)
      )
        handleScroll({
          desc: e.key === "ArrowLeft",
          asc: e.key === "ArrowRight",
        });
    };

    document.addEventListener("keydown", handleScrollKey);
    return () => {
      document.removeEventListener("keydown", handleScrollKey);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [contents, currentParentId, itemQueries, currentIndexItem]);

  return (
    <CardSessionViewContentWidthFrame
      className={className}
      isPortrait={isPortrait}
      contents={contents}
      prefixItem={prefixItem}
      currentParentId={currentParentId}
      parentId={parentId}
    >
      {children}
    </CardSessionViewContentWidthFrame>
  );
};

const CardSessionViewContentCaption = ({
  isPortrait,
  children,
}: ElementType<unknown> & CardProps) => {
  const { isDisplayContent } = useSessionViewProvider();
  return (
    <>
      {isDisplayContent ? null : (
        <>
          {isPortrait ? (
            children
          ) : (
            <DisplayFullScreenMediaContent
              className={cn(paddingContainerItem, "w-full")}
            >
              {children}
            </DisplayFullScreenMediaContent>
          )}
        </>
      )}
    </>
  );
};

const CardSessionViewFooter = ({
  isPortrait,
  children,
}: {
  isPortrait: boolean;
} & ElementType<unknown>) => {
  const { isDisplayContent } = useSessionViewProvider();

  return (
    <>
      {!isDisplayContent ? (
        <>
          {isPortrait ? (
            <DisplayBetweenRow className="w-fit">{children}</DisplayBetweenRow>
          ) : (
            <DisplayItem className={`absolute right-${xSpaceContainer}`}>
              <DisplayColumnCenterBox>{children}</DisplayColumnCenterBox>
            </DisplayItem>
          )}
        </>
      ) : (
        isPortrait && <FooterContentDrawer />
      )}
    </>
  );
};

const FooterContentDrawer = () => {
  const { isDisplayContent, content } = useSessionViewProvider();

  return (
    <>{isDisplayContent ? <FooterDrawer>{content}</FooterDrawer> : null}</>
  );
};

CardSessionView.Content = CardSessionViewContent;
CardSessionView.ContentWidth = CardSessionViewContentWidth;
CardSessionView.ContentCaption = CardSessionViewContentCaption;
CardSessionView.Footer = CardSessionViewFooter;
CardSessionView.ContentFrame = CardSessionViewContentFrame;
