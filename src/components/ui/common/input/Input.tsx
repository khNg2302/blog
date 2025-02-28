import { forwardRef, ReactNode } from "react";
import { DisplayCenterItemsRow } from "../../layout/displayItem/DisplayItemRowItem";
import { ElementType } from "@/types/element";
import { cn } from "@/lib/utils";

export const Input = forwardRef<
  HTMLInputElement,
  { subfix?: ReactNode; prefix?: ReactNode } & ElementType<HTMLInputElement>
>(({ prefix, subfix, ...props }, ref) => {
  return (
    <DisplayCenterItemsRow
      className={cn("rounded-md border overflow-hidden pl-2")}
    >
      {prefix}
      <input
        ref={ref}
        {...props}
        className="border-none outline-none border flex-1 bg-transparent"
      />
      {subfix}
    </DisplayCenterItemsRow>
  );
});

Input.displayName = "Input";
