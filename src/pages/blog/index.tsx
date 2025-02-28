"use client";
import { SessionViewProvider } from "@/providers/sessionView";
import { BlogCard } from "./components/Card";
import { BlogComment } from "./components/Comment";
import { BlogLike } from "./components/Like";
import { BlogShare } from "./components/share";
export const BlogPage = () => {
  return (
    <SessionViewProvider>
      <BlogCard
        likeComp={<BlogLike />}
        commentComp={<BlogComment />}
        shareComp={<BlogShare />}
        blogs={[
          {
            text: "text",
            header: "blog",
            image: "/",
            id: "0",
          },
          {
            text: "text 2",
            header: "blog 2",
            image: "/ 2",
            id: "1",
          },
          {
            text: "text 3",
            header: "blog 3",
            image: "/ 3",
            id: "2",
          },
        ]}
      />
    </SessionViewProvider>
  );
};
