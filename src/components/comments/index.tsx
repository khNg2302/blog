"use client";
import { useState } from "react";
import { CommentItemType } from "./components/Comment";
import { CommentRelied } from "./components/CommentRelied";

export interface CommentsProps {
  comments: CommentItemType[];
}

export const Comments = ({ comments }: CommentsProps) => {
  const [isExpendedCommentId, setIsExpendedCommentId] = useState("");
  return (
    <>
      {comments.map((item) => {
        return (
          <CommentRelied
            key={item.id}
            {...item}
            isExpendedCommentId={isExpendedCommentId}
            setIsExpendedCommentId={setIsExpendedCommentId}
          />
        );
      })}
    </>
  );
};
