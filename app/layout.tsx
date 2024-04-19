import type { Metadata } from "next";
import { Inter } from "next/font/google";
import {StyledEngineProvider} from "@mui/material";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Aaghum Ministries",
  description: "Aaghum ministries is my youtube channel where i upload my songs. My songs are related to Jesus Christ our God. All the songs are for christians.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StyledEngineProvider injectFirst>{children}
        </StyledEngineProvider>
        </body>
    </html>
  );
}
