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
    const blogs = await getData("blog", { search: (await searchParams).search })

    return (
        <div className=" w-full flex h-fit min-h-screen flex-col items-center ">
            <NavigationBar search={true} />
            <div className="w-full max-w-7xl flex flex-col p-8 gap-8 lg:px-16 lg:py-4">
                <Title>บทความทั้งหมด</Title>
                <div className=" grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8 lg:gap-8">
                    {blogs?.length > 0 ? blogs?.map(({ id, title, subtitle, image }, index) => <BlogCard index={index} id={id} title={title} subtitle={subtitle} img={image} key={id} />) : <NotFoundItem />}
                </div>
            </div>
        </div >
    )

};
