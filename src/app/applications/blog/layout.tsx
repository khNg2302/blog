import { Page } from "@/components/page";
import { DisplayItem } from "@/components/ui/layout/displayItem/DisplayItem";
import { PagenameEnum } from "@/stores/menu";

export default function BlogLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Page name={PagenameEnum.blog}>
      <DisplayItem className={`h-full w-full relative`}>{children}</DisplayItem>
    </Page>
  );
}
