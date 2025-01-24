"use client";
import { BlogCard } from "./components/Card";
export const BlogPage = () => {
  return (
    <>
      <BlogCard
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
    </>
  );
};
