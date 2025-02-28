import { cn } from "@/lib/utils";
import { DisplayItem, DisplayItemI } from "./DisplayItem";
import { forwardRef } from "react";

export type DisplayScrollItemI = DisplayItemI & {
  overflowBoxClassname?: string;
  displayItemClassname?: string;
};

export const DisplayScrollItem = forwardRef<HTMLDivElement, DisplayScrollItemI>(
  ({ children, displayItemClassname, overflowBoxClassname }, ref) => {
    return (
      <DisplayItem
        ref={ref}
        className={cn("overflow-auto flex-1 w-full", overflowBoxClassname)}
      >
        <DisplayItem className={cn(displayItemClassname, "w-full h-full")}>
          {children}
        </DisplayItem>
      </DisplayItem>
    );
  }
);

DisplayScrollItem.displayName = "DisplayScrollItem";
