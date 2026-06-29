import { NavigationBar, SearchProduct } from "@/components";
import { generateSEO } from "@/utility/seo/seo";

type prop = {
    params: Promise<{
        category: string
        type: string
        brand: string
    }>
    searchParams: Promise<{
        search?: string
    }>
}

export const metadata = generateSEO({
    title: "รวมสินค้าอุตสาหกรรมและอุปกรณ์โรงงานครบวงจร | ภูณัฐกิจ ซัพพลาย",
    description: "เลือกซื้อสินค้าอุตสาหกรรมและอุปกรณ์โรงงานคุณภาพสูง แหล่งรวมแคตตาล็อกมอเตอร์ไฟฟ้า ระบบบาร์โค้ดซัพพลาย ปั๊มและวาล์วอุตสาหกรรม ครบจบในที่เดียว รองรับทุกอุตสาหกรรม สินค้าพร้อมส่งตรงจากโรงงาน",
    keywords: [""],
})

export default async function Page({ params, searchParams }: prop) {
    return (
        <div className="flex w-full flex-col min-h-screen ">
            <NavigationBar search={true} />
            <SearchProduct params={params} searchParams={searchParams} />
        </div>
    )
}