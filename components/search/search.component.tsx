import SearchCategoryProduct from "./search.category.component";
import SearchFilter from "./search.filter.component";
import ItemSearch from "./search.item.component";

export default function SearchProduct() {
    return (
        <div className="w-full pt-24  flex  items-center flex-col z-0 ">
            <div className=" bg-orange h-14 w-full flex justify-center items-center">
                <div className="text-white">
                    หน้าหลัก
                </div>
            </div>
            <div className=" max-w-7xl w-full h-fit p-4 lg:p-8 flex flex-col gap-4 ">
                <SearchCategoryProduct />
                <div className=" flex flex-col gap-4">
                    <SearchFilter />
                    <ItemSearch />
                </div>
            </div>
        </div>
    )

};
