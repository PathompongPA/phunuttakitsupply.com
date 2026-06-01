export const dynamic = "force-dynamic";
import type { Metadata } from "next";
import "./globals.css";
import { Footer, Navbar } from "@/components";
import { getData } from "@/utility";

export const metadata: Metadata = {
  title: "Phunuttakit Supply Co., Ltd",
  description: "จัดจำหน่ายอะไหล่อตสาหกรรม",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const category = await getData("category", {})
  return (
    <html
      lang="en"
      className={`h-full antialiased`}
    >
      <body className={`min-h-full flex flex-col items-center overflow-y-scroll z-10 `}>
        <Navbar category={category} />
        {children}
        <Footer />
      </body>
    </html>
  );
}
