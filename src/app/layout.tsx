import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import layout from "@/ui/layout";
import ButtonTextOutside from "@/ui/buttons/ButtonTextOutside";
import { AbstractLogo, AccountBox } from "@/ui/icons";
const inter = Inter({ subsets: ["latin"] });

const { Wrapper, Conteiner, Header, Footer } = layout;

export const metadata: Metadata = {
  title: "AppointMe",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="fixed-background"></div>
        <Wrapper>
          <Header
            title="AppointMe"
            logo={<AbstractLogo />}
            description="Set a meeting time"
          >
            <ButtonTextOutside icon={<AccountBox />}>
              ABOUT ME
            </ButtonTextOutside>
          </Header>
          <main>
            <Conteiner>{children}</Conteiner>
          </main>
          <Footer>
            <span>Created by @pavlenkodim</span>
            <span>AppointMe ©{new Date().getFullYear()}</span>
          </Footer>
        </Wrapper>
      </body>
    </html>
  );
}
