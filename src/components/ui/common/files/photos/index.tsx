import { CardSessionView } from "../../card/CardSessionView";
import { CardImage } from "../../image/Image";

interface DisplayPhotosProps {
  photos: {
    src: string;
    id: string;
  }[];
  isPortrait: boolean;
  prefixItem: string;
  currentParentId: string;
  onSetCurrentId: (currentId: string) => void;
  parentId: string;
}

export const DisplayPhotos = ({
  photos,
  isPortrait,
  prefixItem,
  currentParentId,
  onSetCurrentId,
  parentId,
}: DisplayPhotosProps) => {
  const photosRender = ({ src }: { id: string; src: string }) => {
    return <CardImage src={src} alt={"blog-image"}></CardImage>;
  };

  return (
    <CardSessionView.ContentWidth
      className="h-full"
      isPortrait={isPortrait}
      contents={photos}
      prefixItem={prefixItem}
      currentParentId={currentParentId}
      parentId={parentId}
      onSetCurrentId={onSetCurrentId}
    >
      {photosRender}
    </CardSessionView.ContentWidth>
  );
};
