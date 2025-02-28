"use client";
import { ElementType } from "@/types/element";
import { createContext, RefObject, useContext, useRef } from "react";

const UploadContext = createContext({
  clickChooseFile: () => {},
  inputRef: { current: null } as RefObject<HTMLInputElement | null>,
});

export const Upload = ({ children }: ElementType<unknown>) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const clickChooseFile = () => {
    inputRef?.current?.click();
  };

  const value = {
    clickChooseFile,
    inputRef,
  };
  return (
    <UploadContext.Provider value={value}>{children}</UploadContext.Provider>
  );
};

export const useUploadProvider = () => {
  const context = useContext(UploadContext);
  return context;
};
