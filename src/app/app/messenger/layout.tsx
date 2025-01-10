import { Page } from "@/components/page";
import { PagenameEnum } from "@/stores/menu";


export default function MessengerLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Page name={PagenameEnum.messenger} className="w-full h-full">
        {children}
    </Page>
  );
}
