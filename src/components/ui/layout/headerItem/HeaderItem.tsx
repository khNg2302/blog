import { cn } from "@/lib/utils";
import { DisplayItem, DisplayItemI } from "../displayItem/DisplayItem";

export const HeaderItem = ({ children, className }: DisplayItemI) => {
  return (
    <DisplayItem className={cn("size-4 w-full h-fit", className)}>
      {children}
    </DisplayItem>
  );
};
