import { Menu } from "@/components/menu";
import "@/styles/index.css"
import { ThemeProvider } from "@/providers/theme-provider";
import { DisplayColumnItem } from "@/components/ui/layout/displayItem/DisplayColumnItem";
import { TopBar } from "@/components/topBar";
import { DisplayScrollItem } from "@/components/ui/layout/displayItem/DisplayScrollItem";
import { MenuStoreProvider } from "@/providers/menu";
import { TextStoreProvider } from "@/providers/text";
import { MenuItemProvider } from "@/providers/menuItem";
import { SidebarProvider } from "@/components/ui/sidebar";
import { PortraitProvider } from "@/providers/portrait";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html >
      <body className="overflow-hidden">
        <PortraitProvider>

          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <TextStoreProvider>
              <MenuStoreProvider>
                <SidebarProvider defaultOpen={false}>
                  <MenuItemProvider>

                    <Menu />
                  </MenuItemProvider>
                  <DisplayColumnItem className="w-full h-screen">
                    <TopBar></TopBar>
                    <DisplayScrollItem>
                      {children}
                    </DisplayScrollItem>
                  </DisplayColumnItem>
                </SidebarProvider>
              </MenuStoreProvider>
            </TextStoreProvider>
          </ThemeProvider>
        </PortraitProvider>
      </body>
    </html>
  );
}
