import { DisplayColumnItem } from "@/components/ui/layout/displayItem/DisplayColumnItem";
import { CommentItem, CommentType } from "./Comment";
import { Comments } from "..";

export const CommentRelied = ({ ...props }: CommentType) => {
  return (
    <DisplayColumnItem className="relative">
      <CommentItem {...props} isRelied={props.relied.length > 0} />
      <div className="comment">
        <Comments key={props.id} {...props} comments={props.relied} />
      </div>
    </DisplayColumnItem>
  );
};
