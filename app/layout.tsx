export const dynamic = "force-dynamic";
import "./globals.css";
import { Footer, Navbar } from "@/components";
import { getData } from "@/utility";
import { Prompt } from "next/font/google";
import { generateSEO } from "@/utility/seo/seo";

export const metadata = generateSEO({
  title: "ภูณัฐกิจ ซัพพลายส์ | อุปกรณ์และเครื่องจักรโรงงานอุตสาหกรรม ราคาส่ง",
  description: "บริษัท ภูณัฐกิจ ซัพพลาย จำกัด ตัวแทนจำหน่ายและจัดหาสินค้าอุตสาหกรรม อุปกรณ์โรงงานครบวงจร มอเตอร์ไฟฟ้า ปั๊มน้ำ วาล์ว และปั๊มลม สินค้าแท้มาตรฐานโรงงาน ราคาส่ง พร้อมบริการจัดส่งทั่วประเทศ ติดต่อขอใบเสนอราคาได้ทันที",
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
