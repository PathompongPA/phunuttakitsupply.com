export const dynamic = "force-dynamic";
import "./globals.css";
import { Footer, Navbar } from "@/components";
import { getData } from "@/utility";
import { Prompt } from "next/font/google";
import { generateSEO } from "@/utility/seo/seo";

export const metadata = generateSEO({
  title: "ผู้จำหน่ายสินค้าอุตสาหกรรม มอเตอร์ไฟฟ้า  และระบบบาร์โค้ดครบวงจร",
  description: "บริษัท ภูณัฐกิจ ซัพพลาย จำกัด ตัวแทนนำเข้า จัดหาและจำหน่ายสินค้าอุตสาหกรรม มอเตอร์ไฟฟ้าอุตสาหกรรม ปั๊มน้ำและวาล์ว วัสดุอุปกร์ก่อสร้างและระบบบาร์โคดครบวงจร 1.สติ๊กเกอร์ 2.ผ้าหมึกริบบอน(Ribbon Thermal Tranfers) เครื่องพิมพ์สติ๊กเกอร์(Thermal Tranfers Printer) สินค้าตามมาตรฐานโรงงาน พร้อมทั้งมีบริการรับซ่อมมอเตอร์ไฟฟ้าอุตสาหกรรม(overhaul) และบริการจัดส่งทั่วประเทศ",
})

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
