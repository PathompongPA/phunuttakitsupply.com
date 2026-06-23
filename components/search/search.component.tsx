import SearchCategoryProduct from "./search.category.component";
import SearchFilter from "./search.filter.component";
import ItemSearch from "./search.item.component";

type prop = {
    params: Promise<{
        category: string
        type: string
        brand: string
    }>
}

export default async function SearchProduct({ params }: prop) {
    return (
        <div className="w-full  flex  items-center flex-col z-0 ">
            <div className=" max-w-7xl w-full h-fit p-4 lg:p-16 lg:py-4 flex flex-col gap-4 ">
                <SearchCategoryProduct params={params} />
                <div className=" flex flex-col md:flex-row gap-4 lg:gap-8">
                    <SearchFilter params={params} />
                    <ItemSearch params={params} />
                </div>
            </div>
        </div>
    )

};
