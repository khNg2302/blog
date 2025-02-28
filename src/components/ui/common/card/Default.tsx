"use client";
import { ElementType } from "@/types/element";
import { DisplayRowItem } from "../../layout/displayItem/DisplayItemRowItem";
import { Card, CardI, CardProps } from "./Card";
import { cn } from "@/lib/utils";
import { DisplayColumnItem } from "../../layout/displayItem/DisplayColumnItem";

export const DefaultCard = ({ children, className }: CardI) => {
  return (
    <Card className={className}>
      {({ isPortrait }) => <>{children({ isPortrait })}</>}
    </Card>
  );
};

const DefaultCardHeader = ({ children }: ElementType<unknown>) => {
  return (
    <Card.Header>
      <DisplayColumnItem className="gap-2">{children}</DisplayColumnItem>
    </Card.Header>
  );
};

const DefaultCardContent = ({
  children,
  className,
  isPortrait,
}: ElementType<unknown> & CardProps) => {
  return (
    <Card.Content isPortrait={isPortrait} className={cn(className)}>
      {children}
    </Card.Content>
  );
};

const DefaultCardFooter = ({ children }: ElementType<unknown>) => {
  return (
    <Card.Footer>
      <DisplayRowItem className="px-0 w-full">{children}</DisplayRowItem>
    </Card.Footer>
  );
};

DefaultCard.Header = DefaultCardHeader;
DefaultCard.Content = DefaultCardContent;
DefaultCard.Footer = DefaultCardFooter;
