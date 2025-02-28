import { Emotion } from "@/components/emotion";
import { useSessionViewProvider } from "@/providers/sessionView";

export const BlogLike = () => {
  const { isDisplayContent, hideContent } = useSessionViewProvider();
  return <Emotion open={isDisplayContent} close={hideContent} />;
};
