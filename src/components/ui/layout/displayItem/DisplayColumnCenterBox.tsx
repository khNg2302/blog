import { cn } from "@/lib/utils";
import { DisplayColumnItem, DisplayColumnItemI } from "./DisplayColumnItem";

type DisplayColumnCenterBoxI = DisplayColumnItemI;

export const DisplayColumnCenterBox = ({
  children,
  className,
  ...props
}: DisplayColumnCenterBoxI) => {
  return (
    <DisplayColumnItem
      {...props}
      className={cn("justify-center items-center gap-2 m-auto", className)}
    >
      {children}
    </DisplayColumnItem>
  );
};
