import { Heart } from "lucide-react";

type LikeButtonProps = {
  isLiked: boolean;
};

export const LikeButton = ({ isLiked }: LikeButtonProps) => {
  return <Heart color={isLiked ? "red" : "transparent"} />;
};
