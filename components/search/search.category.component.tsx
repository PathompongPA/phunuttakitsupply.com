import { getData } from "@/utility"
import SearchCategoryButton from "./search.category.button.component"

type prop = {
    params: Promise<{
        category: string
        type: string
        brand: string
    }>
}

export default async function SearchCategoryProduct({ params }: prop) {
    const { category } = await params;
    const categories = await getData("category", {
        sort: ["sort"],
        // filter: {
        //     product: {
        //         _some: {
        //             id: {
        //                 _nnull: true
        //             }
        //         }
        //     }
        // }
    })
    return (
        <div className=" flex  gap-2 lg:gap-4 overflow-x-scroll overflow-visible scrollbar-none scroll-smooth select-none ">
            {/* <SearchCategoryButton name="ทั้งหมด" isActive={!category} /> */}
            {categories?.map(({ name }) => <SearchCategoryButton key={name} name={name} isActive={decodeURIComponent(category) === name} />)}
        </div>
    )

};
