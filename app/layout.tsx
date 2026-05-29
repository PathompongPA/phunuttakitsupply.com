export const dynamic = "force-dynamic";
import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components";

export const metadata: Metadata = {
  title: "Phunuttakit Supply Co., Ltd",
  description: "จัดจำหน่ายอะไหล่อตสาหกรรม",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`h-full antialiased`}
    >
      <body className={`min-h-full flex flex-col items-center overflow-y-scroll z-10 `}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
