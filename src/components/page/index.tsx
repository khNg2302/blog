"use client";
import { useMenuStore } from "@/providers/menu";
import { PagenameEnum } from "@/stores/menu";
import { useCallback, useEffect, useRef } from "react";
import { DisplayContainerItemI } from "../ui/layout/displayItem/DisplayContainerItem";
import { usePathname } from "next/navigation";

type PageI = DisplayContainerItemI & {
  name: PagenameEnum;
};

export const Page = ({ children, name }: PageI) => {
  const namePage = useMenuStore((state) => state.namePage);
  const pathname = usePathname();
  const prevPathname = useRef<string | null>(null);

  const getIsBackRootPage = useCallback(() => {
    const getRootPath = (path: string) => {
      return path.split("/")[1];
    };

    const compareIsBackRootPath = (rootPath: string, rootSubPath: string) => {
      return !rootPath || rootPath === rootSubPath;
    };

    if (!pathname || !prevPathname.current) return false;

    return compareIsBackRootPath(
      getRootPath(pathname),
      getRootPath(prevPathname.current)
    );
  }, [pathname, prevPathname]);

  useEffect(() => {
    if (!prevPathname.current) {
      namePage({ name });
      return;
    }

    if (getIsBackRootPage()) {
      namePage({ name });
      return;
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  return <>{children}</>;
};
