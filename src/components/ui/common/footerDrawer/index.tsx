import { cn } from "@/lib/utils";
import { DisplayItem } from "../../layout/displayItem/DisplayItem";
import { ElementType } from "@/types/element";

export const FooterDrawer = ({ children, className }: ElementType<unknown>) => {
  return (
    <DisplayItem
      className={cn("w-full border rounded-xl rounded-b-none", className)}
    >
      {children}
    </DisplayItem>
  );
};
