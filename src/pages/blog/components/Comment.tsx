import { Comments } from "@/components/comments";
import { CommentItemType } from "@/components/comments/components/Comment";
import { GhostAppButton } from "@/components/ui/common/button/Button";
import { Input } from "@/components/ui/common/input/Input";
import { DisplayColumnItem } from "@/components/ui/layout/displayItem/DisplayColumnItem";
import { DisplayContainerItem } from "@/components/ui/layout/displayItem/DisplayContainerItem";
import { DisplayScrollItem } from "@/components/ui/layout/displayItem/DisplayScrollItem";
import { HeaderBetweenItem } from "@/components/ui/layout/headerItem/HeaderBetweenItem";
import { useSessionViewProvider } from "@/providers/sessionView";
import { Send, X } from "lucide-react";

export const BlogComment = () => {
  const { hideContent } = useSessionViewProvider();
  const comments: CommentItemType[] = [
    {
      id: "1",
      date: "today",
      src: "/assists/images/logo.jpg",
      name: "user 1",
      comment: "comment here",
      relied: [
        {
          id: "2",
          date: "today",
          src: "/assists/images/logo.jpg",
          name: "user 2",
          comment: "rely comment here",
          relied: [
            {
              id: "4",
              date: "today",
              src: "/assists/images/logo.jpg",
              name: "user 1",
              comment: "rely comment here",
              relied: [],
            },
            {
              id: "5",
              date: "today",
              src: "/assists/images/logo.jpg",
              name: "user 1",
              comment: "rely comment here",
              relied: [],
            },
          ],
        },
        {
          id: "3",
          date: "today",
          src: "/assists/images/logo.jpg",
          name: "user 1",
          comment: "rely comment here",
          relied: [],
        },
      ],
    },
  ];
  return (
    <DisplayColumnItem className="w-full h-full overflow-hidden">
      <HeaderBetweenItem
        title={"Comments"}
        icons={
          <>
            <GhostAppButton onClick={hideContent}>
              <X />
            </GhostAppButton>
          </>
        }
      ></HeaderBetweenItem>
      <DisplayContainerItem className="flex-1 overflow-hidden">
        <DisplayColumnItem className="h-full">
          <DisplayScrollItem>
            <Comments comments={comments} />
          </DisplayScrollItem>
          <Input
            subfix={
              <GhostAppButton>
                <Send />
              </GhostAppButton>
            }
          />
        </DisplayColumnItem>
      </DisplayContainerItem>
    </DisplayColumnItem>
  );
};
