
import { NavigationBar, SearchProduct } from "@/components";

type prop = {
    params: Promise<{
        category: string
        type: string
        brand: string
    }>
    searchParams: Promise<{
        search?: string
    }>
}

export default async function Page({ params, searchParams }: prop) {
    return (
        <div className=" w-full">
            <NavigationBar search={true} />
            <SearchProduct params={params} searchParams={searchParams} />
        </div>

    )

};
