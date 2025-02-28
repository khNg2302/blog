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
  return (
    <DisplayColumnItem className="w-full h-full">
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
      <DisplayContainerItem className="flex-1">
        <DisplayColumnItem className="h-full">
          <DisplayScrollItem>scroll comments</DisplayScrollItem>
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
