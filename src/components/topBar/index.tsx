import { DisplayCenterItemsRow } from "../ui/layout/displayItem/DisplayItemRowItem"
import { DisplayContainerItem } from "../ui/layout/displayItem/DisplayContainerItem"
import { ImageItem } from "../ui/common/image/Image"
import { MenuTrigger } from "./components/SidebarTrigger"
import { DisplayBetweenRow } from "../ui/layout/displayItem/DisplayBetweenRow"

export const TopBar = () => {
    return <DisplayContainerItem className="shadow">
        <DisplayBetweenRow className="justify-between">
            <DisplayCenterItemsRow className="flex-1">
                <MenuTrigger />
           
            </DisplayCenterItemsRow>
           
            <ImageItem alt='logo' src='/assists/images/logo.jpg' className="w-12 aspect-square"/>
            <DisplayCenterItemsRow className="flex-1"></DisplayCenterItemsRow>
        </DisplayBetweenRow>
        
    </DisplayContainerItem>
}