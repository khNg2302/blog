import { GhostAppButton } from "@/components/ui/common/button/Button";
import { Text } from "@/components/ui/common/text/Text";
import { DisplayColumnItem } from "@/components/ui/layout/displayItem/DisplayColumnItem";
import { DisplayCenterItemsRow } from "@/components/ui/layout/displayItem/DisplayItemRowItem";
import { User, UserProps } from "@/components/user";
import { cn } from "@/lib/utils";
import { ItemType } from "@/types/element";

export type CommentItemType = {
  date: string;
  comment: string;
  relied: CommentItemType[];
} & ItemType &
  UserProps;

export type CommentType = CommentItemType;

type CommentItemProps = CommentType & { isRelied: boolean };

export const CommentItem = ({
  src,
  name,
  date,
  comment,
  isRelied,
}: CommentItemProps) => {
  return (
    <DisplayColumnItem className="comment">
      <DisplayCenterItemsRow
        className={cn("gap-2", { "comment-relied": isRelied })}
      >
        <User src={src} name={name} />
        <Text>{date}</Text>
        <GhostAppButton>Rely</GhostAppButton>
      </DisplayCenterItemsRow>
      <Text className="">{comment}</Text>
    </DisplayColumnItem>
  );
};
