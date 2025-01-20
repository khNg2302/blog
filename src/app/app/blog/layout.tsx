import { Page } from "@/components/page";
import { DisplayItem } from "@/components/ui/layout/displayItem/DisplayItem";
import { cn } from "@/lib/utils";
import { PagenameEnum } from "@/stores/menu";


export default function BlogLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Page  name={PagenameEnum.blog}>
      <DisplayItem className={cn('h-full')}>
        {children}

      </DisplayItem>
    </Page>
  );
}
