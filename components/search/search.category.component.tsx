import { getData } from "@/utility"

export default async function SearchCategoryProduct() {
    const category = await getData("category", {})
    return (
        <div className=" flex  gap-2 lg:gap-4 overflow-x-scroll overflow-visible scrollbar-none scroll-smooth ">
            {category?.map(({ name }) =>
                <div className="flex flex-nowrap" key={name}>
                    <input className="peer/searchCategory" type="checkbox" id={name} hidden />
                    <label className="
                     active:scale-90
                    text-nowrap
                    min-w-fit
                    ease-out
                     duration-300
                     text-[16px]
                    p-2 text-gray-4  bg-gray-1 rounded-lg font-semibold lg:text-xs 
                    peer-checked/searchCategory:text-white peer-checked/searchCategory:bg-orange
                    lg:hover:cursor-pointer
                    "
                        htmlFor={name}
                    >
                        {name}
                    </label>
                </div>
            )}
        </div>
    )

};
