"use client";
import Image from "next/image";
import {
  DisplayCenterItem,
  DisplayCenterItemI,
} from "../../layout/displayItem/DisplayCenterItem";
import { cn } from "@/lib/utils";

type ImageItemType = DisplayCenterItemI & {
  alt: string;
  src: string;
};

export const ImageItem = ({ alt, src, className, ...props }: ImageItemType) => {
  return (
    <DisplayCenterItem
      {...props}
      className={cn("relative w-full overflow-hidden", className)}
    >
      <Image alt={alt} src={src} fill objectFit="contain" />
    </DisplayCenterItem>
  );
};

export const Avatar = ({ alt, src, className, ...props }: ImageItemType) => {
  return (
    <ImageItem
      alt={alt}
      src={src}
      {...props}
      className={cn("w-[40px] aspect-square rounded-full", className)}
    />
  );
};

export const CardImage = ({ alt, src, className, ...props }: ImageItemType) => {
  return (
    <ImageItem
      alt={alt}
      src={src}
      {...props}
      className={cn("w-full h-full rounded-lg", className)}
    />
  );
};
