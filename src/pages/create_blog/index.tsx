"use client";
import { SubPage } from "@/components/subpage";
import { CardSessionView } from "@/components/ui/common/card/CardSessionView";
import { UploadFiles } from "@/components/ui/common/upload/files/UploadFiles";
import { CardBlogFrame } from "@/feature/blog/CardBlogFrame";
import { PathnameEnum } from "@/stores/menu";

export const CreateBlogPage = () => {
  return (
    <SubPage path={PathnameEnum.create_blog}>
      <CardBlogFrame>
        {({ isPortrait }) => (
          <>
            <CardSessionView.ContentFrame isPortrait={isPortrait} contents={[]}>
              <CardBlogFrame.Content
                isPortrait={isPortrait}
                cardText={"text"}
                cardFiles={<UploadFiles />}
                cardHeader={<></>}
              ></CardBlogFrame.Content>
            </CardSessionView.ContentFrame>
          </>
        )}
      </CardBlogFrame>
    </SubPage>
  );
};
