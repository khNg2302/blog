import { cn } from "@/lib/utils";
import { DisplayItem, DisplayItemI } from "./DisplayItem";
import { ElementType } from "@/types/element";
import { DisplayColumnItem } from "./DisplayColumnItem";
import { DisplayScrollItem } from "./DisplayScrollItem";

export const DisplayMedia = ({
  children,
  className,
  ...props
}: DisplayItemI) => {
  return (
    <DisplayItem {...props} className={cn(className, "")}>
      {children}
    </DisplayItem>
  );
};

export const DisplayFullScreenMedia = ({
  children,
  className,
}: DisplayItemI) => {
  return (
    <DisplayMedia className={cn("absolute inset-0", className)}>
      {children}
    </DisplayMedia>
  );
};

export const DisplayFullScreenMediaContent = ({
  children,
  className,
}: ElementType<unknown>) => {
  return (
    <DisplayColumnItem
      className={cn(
        "absolute bottom-0 left-0 right-0 z-10 bg-white/30 max-h-full",
        className
      )}
    >
      <DisplayScrollItem>{children}</DisplayScrollItem>
    </DisplayColumnItem>
  );
};

DisplayFullScreenMedia.Content = DisplayFullScreenMediaContent;
