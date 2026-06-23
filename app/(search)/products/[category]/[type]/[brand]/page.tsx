
import { NavigationBar, SearchProduct } from "@/components";

type prop = {
    params: Promise<{
        category: string
        type: string
        brand: string
    }>
}

export default async function Page({ params }: prop) {
    return (
        <div className=" w-full">
            <NavigationBar search={true} />
            <SearchProduct params={params} />
        </div>

    )

};
