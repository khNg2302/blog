import { CommentItemType } from "./components/Comment";
import { CommentRelied } from "./components/CommentRelied";

export interface CommentsProps {
  comments: CommentItemType[];
}

export const Comments = ({ comments }: CommentsProps) => {
  console.log(comments);
  return (
    <>
      {comments.map((item) => {
        return <CommentRelied key={item.id} {...item} />;
      })}
    </>
  );
};
