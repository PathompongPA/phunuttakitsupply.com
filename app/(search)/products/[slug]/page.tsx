import { NavigationBar, Product } from "@/components"

type Props = {
    params: Promise<{
        slug: string
    }>
}
export default async function Page({ params }: Props) {
    const { slug } = await params
    return (
        <div className=" flex justify-center flex-col w-full items-center ">
            <NavigationBar />
            <Product product_name={slug} />
        </div>
    )
};
