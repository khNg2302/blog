import { DisplayCenterItem } from "@/components/ui/layout/displayItem/DisplayCenterItem"
import { BlogCard } from "./components/Card"

export const BlogPage = () => {
    return <DisplayCenterItem className="h-full m-auto">
        <BlogCard  blogs={[
            {
                text: "text",
                header:'blog',
                image:'/'
            },
            {
                text: "text 2",
                header:'blog 2',
                image:'/ 2'
            }
        ]}/>

    </DisplayCenterItem>
}