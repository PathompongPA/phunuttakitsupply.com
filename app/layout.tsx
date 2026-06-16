export const dynamic = "force-dynamic";
import type { Metadata } from "next";
import "./globals.css";
import { Footer, Navbar } from "@/components";
import { getData } from "@/utility";
import { Prompt } from "next/font/google";

export const metadata: Metadata = {
  title: "ภูณัฐกิจ ซัพพลายส์ จำกัด",
  description: " บริษัท ภูณัฐกิจ ซัพพลายส์ จำกัด จัดจำหน่าย สินค้าอะไหล่อตสาหกรรม",
};

export const prompt = Prompt({
  subsets: ["thai", "latin"],
  weight: ["300", "400", "500", "600"],
});
export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const category = await getData("category", {})
  return (
    <html
      lang="th"
      className={`h-full  ${prompt.className} `}
    >
      <body className={`min-h-full flex flex-col items-center scroll z-10 `}>
        <Navbar category={category} />
        {children}
        <Footer />
      </body>
    </html>
  );
}
