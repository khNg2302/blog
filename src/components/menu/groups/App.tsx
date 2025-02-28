import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
} from "@/components/ui/sidebar";
import { PagenameEnum } from "@/stores/menu";
import { GroupMenuElementI, MenuItemsType } from "@/types/components/menu";
import { Search } from "lucide-react";
import { MenuItem } from "../item/MenuItem";

const AppMenuItems: MenuItemsType = [
  {
    title: "Blog",
    url: "/applications/blog",
    icon: Search,
    pagename: PagenameEnum.blog,
  },
  {
    title: "Messenger",
    url: "/applications/messenger",
    icon: Search,
    pagename: PagenameEnum.messenger,
  },
];

export const AppGroupMenu = ({ pagename }: GroupMenuElementI) => {
  return (
    <SidebarGroup>
      <SidebarGroupLabel>Application</SidebarGroupLabel>
      <SidebarGroupContent>
        <SidebarMenu>
          {AppMenuItems.map((item, index) => (
            <MenuItem
              item={item}
              key={index}
              active={pagename === item.pagename}
            />
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
};
