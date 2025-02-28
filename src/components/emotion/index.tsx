import { X } from "lucide-react";
import { GhostAppButton } from "../ui/common/button/Button";
import { HeaderBetweenItem } from "../ui/layout/headerItem/HeaderBetweenItem";
import { DisplayColumnItem } from "../ui/layout/displayItem/DisplayColumnItem";
import { Tab } from "../ui/common/tab";

interface EmotionProps {
  open: boolean;
  close: () => void;
}

export const Emotion = ({ open, close }: EmotionProps) => {
  const tabs = [
    {
      id: "1",
      label: "hihi",
    },
    {
      id: "2",
      label: "haha",
    },
    {
      id: "3",
      label: "hehe",
    },
  ];

  return (
    <>
      {open && (
        <DisplayColumnItem>
          <HeaderBetweenItem
            title="Emotions"
            icons={
              <GhostAppButton onClick={close}>
                <X />
              </GhostAppButton>
            }
          ></HeaderBetweenItem>
          <Tab>
            <Tab.HereticalNavigation tabs={tabs}>
              {({ label, id }) => (
                <Tab.HereticalNavigationItem
                  label={label}
                  id={id}
                ></Tab.HereticalNavigationItem>
              )}
            </Tab.HereticalNavigation>
            <Tab.Content>emotions</Tab.Content>
          </Tab>
        </DisplayColumnItem>
      )}
    </>
  );
};
