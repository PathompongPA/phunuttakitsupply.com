import { NavigationBar, Product } from "@/components"

type Props = {
    params: Promise<{
        product: string
    }>
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
