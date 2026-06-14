import { NavigationBar, SearchProduct } from "@/components";

type Props = {
    searchParams: Promise<{
        category?: string | string[]
        brand?: string | string[]
        type?: string | string[]
    }>
}

export default async function Page({ searchParams }: Props) {
    return (
        <div className="flex w-full flex-col min-h-screen ">
            <NavigationBar search={true} />
            <SearchProduct searchParams={searchParams} />
        </div>
    )
}