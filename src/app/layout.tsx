import type { Metadata } from "next";
import "./globals.css";
import { SiteLayout } from "@/components/layout/site-layout";

export const metadata: Metadata = {
  title: "Ragos Valuers and Estate Agents",
  description: "Premium valuation, estate agency, and property advisory services in Kenya."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <SiteLayout>{children}</SiteLayout>
      </body>
    </html>
  );
}
