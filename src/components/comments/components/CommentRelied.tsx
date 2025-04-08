import { DisplayColumnItem } from "@/components/ui/layout/displayItem/DisplayColumnItem";
import { CommentItem, CommentType } from "./Comment";
import { Comments } from "..";
import { Dispatch, SetStateAction } from "react";
import { GhostAppButton } from "@/components/ui/common/button/Button";

interface CommentRelied extends CommentType {
  isExpendedCommentId: string;
  setIsExpendedCommentId: Dispatch<SetStateAction<string>>;
}

export const CommentRelied = ({ ...props }: CommentRelied) => {
  const isExpendedRelied = props.isExpendedCommentId === props.id;
  const relied = props.relied.length > 0;
  return (
    <DisplayColumnItem className="relative">
      <CommentItem {...props} isRelied={relied} />

      {isExpendedRelied && (
        <div className="comment">
          <Comments key={props.id} {...props} comments={props.relied} />
        </div>
      )}

      {!isExpendedRelied && relied && (
        <GhostAppButton
          className="w-fit"
          onClick={() => {
            props.setIsExpendedCommentId(props.id);
          }}
        >
          See more
        </GhostAppButton>
      )}
    </DisplayColumnItem>
  );
};
