import { getData } from "@/utility"
import SearchCategoryButton from "./search.category.button.component"

export default async function SearchCategoryProduct() {
    const category = await getData("category", {
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
            <SearchCategoryButton name="ทั้งหมด" />
            {category?.map(({ name }) => <SearchCategoryButton key={name} name={name} />)}
        </div>
    )

};
