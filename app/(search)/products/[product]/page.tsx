import { NavigationBar, Product } from "@/components"
import { getData } from "@/utility"
import { generateSEO } from "@/utility/seo/seo"
import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { convert } from "html-to-text"

type Props = {
    params: Promise<{
        product: string
    }>
}
function htmlToText(html: string) {
    return convert(html, {
        wordwrap: false,
    })
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { product } = await params
    const productName = decodeURIComponent(product)

    const data = await getData("product", {
        filter: {
            name: {
                _eq: productName
            }
        },
        fields: [
            "*",
            {
                images: [
                    {
                        directus_files_id: [
                            "id",
                        ]
                    }
                ],
                type: ["name"],
                category: ["name"],
                brand: ["name"],
            }
        ]
    })

    const item = data?.[0]
    const description = htmlToText(item?.description)
    if (!item) notFound()

    return generateSEO({
        title: `${item.name} ${item.category.name} ${item.type.name} | ภูณัฐกิจ ซัพพลาย`,
        description: description || `รายละเอียดสินค้า ${description}`,
        keywords: [item.name],
        image: process.env.NEXT_PUBLIC_URL_HOST_CLIENT + "assets/" + item?.thumbnail,
        url: `/product/${item?.name}`,
    })
}

export default async function Page({ params }: Props) {
    const { product } = await params
    return (
        <div className=" flex justify-center flex-col w-full items-center ">
            <NavigationBar />
            <Product product_name={product} />
        </div>
    )
};
