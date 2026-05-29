import { Product } from "@/components"

type Props = {
    params: Promise<{
        slug: string
    }>
}
export default async function Page({ params }: Props) {
    const { slug } = await params
    console.log("slug : ", typeof slug);
    return (
        <div className=" flex justify-center h-screen">
            <Product product_name={slug} />
        </div>
    )
};
