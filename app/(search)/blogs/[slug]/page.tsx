import { Blog, BlogContent, NavigationBar } from "@/components"

type Props = {
    params: Promise<{
        slug: string
    }>
}
export default async function Page({ params }: Props) {
    const { slug } = await params
    return (
        <div className=" flex justify-center flex-col w-full *:w-full overflow-visible " >
            <NavigationBar />
            <BlogContent id={slug} />
            <Blog />
        </div>
    )
};
