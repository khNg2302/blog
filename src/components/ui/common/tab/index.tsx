import { ElementPassPropsType, ElementType, ItemType } from "@/types/element";
import { DisplayContainerItem } from "../../layout/displayItem/DisplayContainerItem";
import { DisplayScrollItem } from "../../layout/displayItem/DisplayScrollItem";
import { DisplayRowItem } from "../../layout/displayItem/DisplayItemRowItem";

type TabProps = ElementType<unknown>;
interface TabNavigationProps extends ElementPassPropsType<ItemType, unknown> {
  tabs: (ItemType & { label: string })[];
}

export const Tab = ({ children }: TabProps) => {
  return <DisplayContainerItem>{children}</DisplayContainerItem>;
};

const TabItemContent = ({ children }: ElementType<unknown>) => {
  return <>{children}</>;
};

const HereticalTabNavigation = ({ children, tabs }: TabNavigationProps) => {
  return (
    <DisplayScrollItem>
      <DisplayRowItem>
        {tabs.map((item) => {
          return children({ ...item });
        })}
      </DisplayRowItem>
    </DisplayScrollItem>
  );
};

const HereticalTabNavigationItem = ({
  label,
}: {
  label: string;
  id: string;
}) => {
  return (
    <DisplayRowItem className="heretical-tab-navigation-item">
      <label>{label}</label>
    </DisplayRowItem>
  );
};

Tab.Content = TabItemContent;
Tab.HereticalNavigation = HereticalTabNavigation;
Tab.HereticalNavigationItem = HereticalTabNavigationItem;
