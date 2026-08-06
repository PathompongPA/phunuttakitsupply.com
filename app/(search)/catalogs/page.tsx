import { CatalogCard, NavigationBar, NotFoundItem } from "@/components";
import Title from "@/components/material/title.component";
import { getData } from "@/utility";
import { generateSEO } from "@/utility/seo/seo";

type Props = {
    searchParams: Promise<{
        search?: string
    }>
}

export const metadata = generateSEO({
    title: "แคตตาล็อกสินค้า มอเตอร์ไฟฟ้า ปั๊มน้ำอุตสาหกรรม ระบบบาร์โค้ดครบวงจร",
    description: "ดาวน์โหลดแค็ตตาล็อก PDF ขอเอกสาร แคตตาล็อกสินค้าอุตสาหกรรมของภูณัฐกิจ ซัพพลาย มอเตอร์ไฟฟ้า 3 เฟส ปั๊มน้ำ วาล์วควบคุม ระบบบาร์โค้ดครบวงจร และวัสดุอุปกรณ์ก่อสร้าง",
})

export default async function Page({ searchParams }: Props) {
    const catalog = await getData("catalog", { search: (await searchParams).search })
    return (
        <div className=" w-full flex flex-col justify-center items-center">
            <NavigationBar search={true} />
            <div className=" max-w-7xl w-full p-4 lg:py-8 lg:px-4 lg:gap-8 flex flex-col gap-4 min-h-screen">
                <Title >Catalog</Title>
                <div className=" grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-2 lg:gap-4 h-full">
                    {catalog.length > 0 ? catalog?.map(({ id, name, thumbnail, file }) => file && <CatalogCard key={id} file={file} id={id} name={name} thumbnail={thumbnail} />) : <NotFoundItem />}
                </div>
            </div>
        </div>
    )

};
