import { Blog, BlogContent, NavigationBar } from "@/components"
import { getData } from "@/utility"
import { generateSEO } from "@/utility/seo/seo"
import type { Metadata } from "next"
import { notFound } from "next/navigation"

type Props = {
    params: Promise<{
        slug: string
    }>
}


export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params
    const blogId = decodeURIComponent(slug)
    const data = await getData("blog", {
        filter: {
            id: {
                _eq: blogId
            }
        },
        fields: [
            "title", "subtitle", "image"
        ]
    })

    const item = data?.[0]
    if (!item) notFound()

    return generateSEO({
        title: `${item?.title} | ภูณัฐกิจ ซัพพลาย`,
        description: item?.subtitle,
        keywords: [item?.title],
        image: item?.image,
        url: `/blogs/${item?.name}`,
    })
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
