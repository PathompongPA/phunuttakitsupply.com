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
    title: "สินค้าอุตสาหกรรมคุณภาพสูง มอเตอร์ไฟฟ้า ปั้มน้ำอุตสาหกรรม และระบบบาร์โค้ดครบวงจร",
    description: "เลือกซื้อสินค้าอุตสาหกรรมคุณภาพสูง มอเตอร์ไฟฟ้า ปั้มน้ำอุตสาหกรรม วัสดุอุปกรณ์ก่อสร้าง และระบบบาร์โค้ดครบวงจร(สติ๊กเกอร์,ริบบอน(Ribbon), เครื่องพิมพ์สติ๊กเกอร์ ,แสกนเนอร์(Scanner) ปั๊มน้ำและวาล์วอุตสาหกรรม  รองรับทุกอุตสาหกรรม สินค้าพร้อมส่งตรงจากโรงงาน",
})

export default async function Page({ searchParams }: prop) {
    return (
        <div className="flex w-full flex-col min-h-screen ">
            <NavigationBar search={true} />
            <SearchProduct searchParams={searchParams} />
        </div>
    )
}