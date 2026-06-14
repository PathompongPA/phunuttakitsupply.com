import { getData } from "@/utility"
import SearchBrandButton from "./brand.button.component"

export default async function SearchBrand() {
    const brand = await getData("brand", {})
    return (
        <div className=" flex flex-col gap-4 px-4 py-2 ">
            <span className=" underline text-[12px] md:text-[12px] text-gray-5">แบรนด์</span>
            <div className=" flex gap-4  md:flex-col items-start flex-wrap">
                {brand?.map(({ name }) =>
                    <SearchBrandButton key={name} name={name} />
                )}
            </div>
        </div>
    )

};
