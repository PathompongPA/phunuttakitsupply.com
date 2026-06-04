import { NavigationBar, NotFoundItem } from "@/components";
import BlogCard from "@/components/blogs/blog.card.component";
import Title from "@/components/material/title.component";
import { getData } from "@/utility";

type Props = {
    searchParams: Promise<{
        search?: string
    }>
}
export default async function Page({ searchParams }: Props) {
    const blogs = await getData("blogs", { search: (await searchParams).search })

    return (
        <div className=" w-full flex min-h-screen flex-col items-center">
            <NavigationBar search={true} />
            <div className="w-full max-w-7xl flex flex-col gap-4 p-4 lg:px-16 lg:py-4">
                <Title>บทความทั้งหมด</Title>
                <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8">
                    {blogs?.length > 0 ? blogs?.map(({ id, title, subtitle, img }) => <BlogCard id={id} title={title} subtitle={subtitle} img={img} key={id} />) : <NotFoundItem />}
                </div>
            </div>
        </div >
    )

};
