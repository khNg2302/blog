import { GhostAppButton } from "@/components/ui/common/button/Button";
import { DisplayColumnItem } from "@/components/ui/layout/displayItem/DisplayColumnItem";
import { DisplayContainerItem } from "@/components/ui/layout/displayItem/DisplayContainerItem";
import { DisplayRowItem } from "@/components/ui/layout/displayItem/DisplayItemRowItem";
import { HeaderBetweenItem } from "@/components/ui/layout/headerItem/HeaderBetweenItem";
import { useSessionViewProvider } from "@/providers/sessionView";
import { X } from "lucide-react";

export const BlogShare = () => {
  const { hideContent } = useSessionViewProvider();
  return (
    <DisplayColumnItem>
      <HeaderBetweenItem
        title={"Shares"}
        icons={
          <>
            <GhostAppButton onClick={hideContent}>
              <X />
            </GhostAppButton>
          </>
        }
      ></HeaderBetweenItem>
      <DisplayContainerItem>
        <DisplayRowItem>shares</DisplayRowItem>
      </DisplayContainerItem>
    </DisplayColumnItem>
  );
};
