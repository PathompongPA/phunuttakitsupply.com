import { NavigationBar, NotFoundItem } from "@/components";
import BlogCard from "@/components/blogs/blog.card.component";
import Title from "@/components/material/title.component";
import { getData } from "@/utility";
import { generateSEO } from "@/utility/seo/seo";

type Props = {
    searchParams: Promise<{
        search?: string
    }>
}

export const metadata = generateSEO({
    title: "คู่มือและวิธีการเลือกซื้อสินค้าอุตสาหกรรม มอเตอร์ไฟฟ้า และระบบบาร์โค๊ด",
    description: "วิธีเลือกซื้อและคู่มือบำรุงรักษามอเตอร์ไฟฟ้าอุตสาหกรรม ปั๊มน้ำและวาล์ว วัสดุก่อสร้าง เทคนิคการประหยัดพลังงานมอเตอร์ไฟฟ้า ประโยชน์ของระบบบาร์โค้ด ได้แก่ สติ๊กเกอร์ ผ้าหมึกริบบอน(Thermal Tranfers Ribbon) เครื่องพิมพ์สติ๊กเกอร์(Thermal Tranfers Printer)",
})

export default async function Page({ searchParams }: Props) {
    const blogs = await getData("blog", { search: (await searchParams).search })

    return (
        <div className=" w-full flex h-fit min-h-screen flex-col items-center ">
            <NavigationBar search={true} />
            <div className="w-full max-w-7xl flex flex-col p-4 gap-8 lg:px-4 lg:py-8">
                <Title>บทความทั้งหมด</Title>
                <div className=" grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 lg:gap-4">
                    {blogs?.length > 0 ? blogs?.map(({ id, title, subtitle, image }, index) => <BlogCard index={index} id={id} title={title} subtitle={subtitle} img={image} key={id} />) : <NotFoundItem />}
                </div>
            </div>
        </div >
    )

};
