import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
} from "@/components/ui/sidebar";
import { MenuItem } from "../item/MenuItem";
import { MenuItemsType } from "@/types/components/menu";
import { PathnameEnum } from "@/stores/menu";
import { Plus } from "lucide-react";

const BlogMenuItems: MenuItemsType = [
  {
    title: "Create",
    url: "/applications/blog/create",
    icon: Plus,
    path: PathnameEnum.create_blog,
  },
];

export const BlogMenu = ({ path }: { path: PathnameEnum | undefined }) => {
  return (
    <SidebarGroup>
      <SidebarGroupLabel>Blog Menu</SidebarGroupLabel>
      <SidebarGroupContent>
        <SidebarMenu>
          {BlogMenuItems.map((item, index) => (
            <MenuItem
              activeClassName="bg-gray-200 hover:bg-gray-200"
              item={item}
              key={index}
              active={path === item.path}
            />
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
};
