import { Avatar } from "../ui/common/image/Image";
import { Text } from "../ui/common/text/Text";
import { DisplayCenterItemsRow } from "../ui/layout/displayItem/DisplayItemRowItem";

export type UserProps = {
  src: string;
  name: string;
};

export const User = ({ src, name }: UserProps) => {
  return (
    <DisplayCenterItemsRow className="gap-1">
      <Avatar src={src} alt={name}></Avatar>
      <Text>{name}</Text>
    </DisplayCenterItemsRow>
  );
};
