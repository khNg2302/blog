'use client'
import { ElementType } from "@/types/element"
import { DisplayScrollItem } from "../ui/layout/displayItem/DisplayScrollItem"
import { DisplayColumnItem } from "../ui/layout/displayItem/DisplayColumnItem"
import { DisplayRowItem } from "../ui/layout/displayItem/DisplayItemRowItem"
import { DisplayItem } from "../ui/layout/displayItem/DisplayItem"
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader } from "../ui/sidebar"
import { useMenuStore } from "@/providers/menu"
import { AppGroupMenu } from "./groups/App"

export const Menu = ({ }: ElementType<unknown>) => {

    const { hidden, pagename } = useMenuStore((state) => state)

    if (hidden) return null

    return <Sidebar>
        <SidebarContent>
            <SidebarHeader>
                <DisplayRowItem>
                    <DisplayItem>
                    </DisplayItem>
                </DisplayRowItem>

            </SidebarHeader>

            <DisplayColumnItem>
                <DisplayScrollItem>
                    <AppGroupMenu pagename={pagename} />
                </DisplayScrollItem>
            </DisplayColumnItem>

            <SidebarFooter></SidebarFooter>
        </SidebarContent>



    </Sidebar>
}