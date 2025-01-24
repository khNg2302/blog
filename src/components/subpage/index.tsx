"use client";
import { useMenuStore } from "@/providers/menu";
import { PathnameEnum } from "@/stores/menu";

import { useEffect } from "react";
import { DisplayContainerItemI } from "../ui/layout/displayItem/DisplayContainerItem";

type PathPageI = DisplayContainerItemI & {
  path: PathnameEnum;
};

export const SubPage = ({ children, path }: PathPageI) => {
  const namePathPage = useMenuStore((state) => state.namePathPage);

  useEffect(() => {
    namePathPage({ path });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <>{children}</>;
};
