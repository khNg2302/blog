import { SubPage } from "@/components/subpage";
import { DisplayColumnItem } from "@/components/ui/layout/displayItem/DisplayColumnItem";
import { paddingContainerItem } from "@/components/ui/layout/displayItem/DisplayContainerItem";
import { cn } from "@/lib/utils";
import { PathnameEnum } from "@/stores/menu";

export const CreateBlogPage = () => {
  return (
    <SubPage path={PathnameEnum.create_blog}>
      <DisplayColumnItem className={cn(paddingContainerItem)}>
        <div>upload media</div>
        <div>content</div>
        <div>post</div>
      </DisplayColumnItem>
    </SubPage>
  );
};
