import { cn } from "@/lib/utils";
import { DisplayItem, DisplayItemI } from "./DisplayItem";

type DisplayRowItemI = DisplayItemI;

export const DisplayRowItem = ({
  children,
  className,
  ...props
}: DisplayRowItemI) => {
  return (
    <DisplayItem className={cn(className, "flex gap-2")} {...props}>
      {children}
    </DisplayItem>
  );
};

export const DisplayCenterItemsRow = ({
  children,
  className,
  ...props
}: DisplayRowItemI) => {
  return (
    <DisplayItem className={cn(className, "flex items-center")} {...props}>
      {children}
    </DisplayItem>
  );
};
