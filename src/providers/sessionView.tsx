"use client";
import { ElementType } from "@/types/element";
import { createContext, ReactNode, useContext, useState } from "react";

interface SessionViewState {
  isDisplayContent: boolean;
  content: ReactNode | null;
}

interface SessionViewAction {
  hideContent: () => void;
  displayContent: () => void;
  setContentDisplay: (content: ReactNode) => void;
}

type SessionViewContext = SessionViewState & SessionViewAction;

const SessionViewContext = createContext<SessionViewContext>({
  isDisplayContent: false,
  content: null,
  hideContent: () => {},
  displayContent: () => {},
  setContentDisplay: () => {},
});

export const SessionViewProvider = ({ children }: ElementType<unknown>) => {
  const [isDisplayContent, setIsDisplayContent] = useState(false);
  const [content, setContent] = useState<ReactNode | null>(null);

  const displayContent = () => {
    setIsDisplayContent(true);
  };

  const hideContent = () => {
    setIsDisplayContent(false);
  };

  const setContentDisplay = (content: ReactNode) => {
    displayContent();
    setContent(content);
  };

  const value = {
    isDisplayContent,
    content,
    displayContent,
    hideContent,
    setContentDisplay,
  };

  return (
    <SessionViewContext.Provider value={value}>
      {children}
    </SessionViewContext.Provider>
  );
};

export const useSessionViewProvider = () => {
  const context = useContext(SessionViewContext);
  return context;
};
