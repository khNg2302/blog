'use client'
import { ItemType } from "@/types/element";
import _ from "lodash";
import { useEffect, useRef, useState } from "react";

const useScroll = ({
  contents,
  prefixItem,
  onSetCurrentId,
}: {
  contents: ItemType[];
  prefixItem: string;
  onSetCurrentId: (currentId: string) => void;
}) => {
  const [currentIndexItem, setCurrentIndexItem] = useState<number>(0)
  const [itemQueries, setItemQueries] = useState<{
    [key: number]: HTMLElement | null;
  }>({})

  const scrolling = useRef<boolean>(false);

  useEffect(() => {
    const itemQuery = ({ item }: { item: ItemType }) => {
      const itemValue = document.getElementById(prefixItem + item.id);
      return itemValue;
    };

    const itemQueriesGet = contents.reduce((result, item, index) => {
      return { ...result, [index]: itemQuery({ item }) };
    }, {} as { [key: number]: HTMLElement | null });

    setItemQueries({ ...itemQueriesGet })

  }, [contents, prefixItem])

  useEffect(() => {
    setActive({ indexItem: currentIndexItem })

  }, [itemQueries])

  const removeScrollEndEventOfItem = () => {
    itemQueries[currentIndexItem]?.removeEventListener("animationend", () =>
      ableScroll()
    );
  };
  const changeCurrentIndexItem = ({ indexItem }: { indexItem: number }) => {
    setCurrentIndexItem(indexItem);
    removeScrollEndEventOfItem();
  };

  const ableScroll = () => {
    scrolling.current = false;
  };

  const setActive = ({ indexItem }: { indexItem: number }) => {
    const queryItemsArray = _.values(itemQueries);
    queryItemsArray.forEach((_, index) => {
      if (index === indexItem) {
        itemQueries[index]?.addEventListener("animationend", () =>
          ableScroll()
        );
        itemQueries[index]?.classList.add("active");
      } else {
        itemQueries[index]?.classList.remove("active");
      }
    });
  }

  const scroll = ({ indexItem }: { indexItem: number }) => {
    setActive({ indexItem })
    onSetCurrentId(prefixItem + indexItem);
  };

  const getIndexScrollToItem = ({
    desc,
    asc,
  }: {
    desc: boolean;
    asc: boolean;
  }) => {
    if (desc && currentIndexItem >= 1) {
      return currentIndexItem - 1;
    }

    if (asc && currentIndexItem < contents.length - 1) {
      return currentIndexItem + 1;
    }
    return currentIndexItem;
  };

  const scrollDebounce = ({ desc, asc }: { desc: boolean; asc: boolean }) => {
    const indexScrollToItem = getIndexScrollToItem({
      desc,
      asc,
    });
    if (scrolling.current === true || currentIndexItem === indexScrollToItem) return;
    scrolling.current = true;
    scroll({ indexItem: indexScrollToItem });
    changeCurrentIndexItem({ indexItem: indexScrollToItem });
  };

  return {
    itemQueries,
    currentIndexItem,
    scrollDebounce,
  };
};

export { useScroll }