import { ReactNode } from "react";
import { DisplayBetweenRow } from "../displayItem/DisplayBetweenRow";
import { HeaderItem } from "./HeaderItem";
import { DisplayItem } from "../displayItem/DisplayItem";
import { Text } from "../../common/text/Text";

export const HeaderBetweenItem = ({
  title,
  icons,
}: {
  title: ReactNode;
  icons: ReactNode;
}) => {
  return (
    <HeaderItem>
      <DisplayBetweenRow className="items-center w-full">
        <DisplayItem className="pl-4">
          <Text>{title}</Text>
        </DisplayItem>
        {icons}
      </DisplayBetweenRow>
    </HeaderItem>
  );
};
