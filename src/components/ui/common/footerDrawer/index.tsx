import { DisplayItem } from "../../layout/displayItem/DisplayItem";
import { ElementType } from "@/types/element";

export const FooterDrawer = ({ children }: ElementType<unknown>) => {
  return (
    <DisplayItem className="w-full flex-1 border rounded-xl rounded-b-none">
      {children}
    </DisplayItem>
  );
};
