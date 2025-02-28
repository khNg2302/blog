import { cn } from "@/lib/utils";
import { ElementType } from "@/types/element";

export const Text = ({ children, className }: ElementType<unknown>) => {
  return <div className={cn("leading-8", className)}>{children}</div>;
};
