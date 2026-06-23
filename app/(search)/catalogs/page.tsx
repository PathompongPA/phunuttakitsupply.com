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
    title: "แคตตาล็อกสินค้า มอเตอร์ ปั๊ม บาร์โค้ด PDF | ภูณัฐกิจ ซัพพลาย",
    description: "รวมไฟล์ดาวน์โหลดแคตตาล็อกสินค้า ภูณัฐกิจ ซัพพลาย เช็กสเปกมอเตอร์ไฟฟ้า 3 เฟส ปั๊มน้ำ วาล์วควบคุม และระบบบาร์โค้ดอุตสาหกรรม ดาวน์โหลดง่าย ได้ไฟล์คุณภาพสูง",
})

export default async function Page({ searchParams }: Props) {
    const catalog = await getData("catalog", { search: (await searchParams).search })
    return (
        <div className=" w-full flex flex-col justify-center items-center">
            <NavigationBar search={true} />
            <div className=" max-w-7xl w-full p-4 lg:p-8 lg:px-16 flex flex-col gap-4 min-h-screen">
                <Title >Catalog</Title>
                <div className=" grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-2 lg:gap-4 h-full">
                    {catalog.length > 0 ? catalog?.map(({ id, name, thumbnail, file }) => file && <CatalogCard key={id} file={file} id={id} name={name} thumbnail={thumbnail} />) : <NotFoundItem />}
                </div>
            </div>
        </div>
    )

};
