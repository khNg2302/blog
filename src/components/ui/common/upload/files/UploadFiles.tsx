"use client";
import { DisplayColumnCenterBox } from "@/components/ui/layout/displayItem/DisplayColumnCenterBox";
import { Upload, useUploadProvider } from "..";
import { DisplayText } from "@/components/ui/layout/displayItem/DisplayText";
import { File } from "lucide-react";
import { useUploadPhotos } from "../hooks/photos";
import { CardImage } from "../../image/Image";

export const UploadFilesConsumer = ({}) => {
  const { clickChooseFile, inputRef } = useUploadProvider();

  const { files: images, changeFiles, setSpecifiedFiles } = useUploadPhotos();

  const handleChangeFiles = () => {
    const files = inputRef.current?.files || ({ length: 0 } as FileList);
    changeFiles({ files });
    setSpecifiedFiles();
  };
  return (
    <>
      <DisplayColumnCenterBox onClick={clickChooseFile}>
        <File />
        <input
          multiple
          ref={inputRef}
          type="file"
          className="hidden"
          onChange={handleChangeFiles}
        />
        <DisplayText>Choose your file(s)</DisplayText>
      </DisplayColumnCenterBox>

      {images.map((item) => {
        return (
          <CardImage
            key={item.id}
            src={item.preview as string}
            alt={item.name}
          />
        );
      })}
    </>
  );
};

export const UploadFiles = () => {
  return (
    <Upload>
      <UploadFilesConsumer />
    </Upload>
  );
};
