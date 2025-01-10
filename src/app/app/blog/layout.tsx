import { Page } from "@/components/page";
import { PagenameEnum } from "@/stores/menu";


export default function BlogLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Page className="h-full" name={PagenameEnum.blog}>
        {children}
    </Page>
  );
}
