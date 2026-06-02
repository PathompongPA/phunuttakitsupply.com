import { getData } from "@/utility"
import SearchBrandButton from "./brand.button.component"

export default async function SearchBrand() {
    const brand = await getData("brand", {})
    return (
        <div className=" flex flex-col gap-4 px-4 py-2 ">
            <h2 className=" underline text-[16px] lg:text-[12px] text-gray-5">แบรนด์</h2>
            <div className=" flex gap-4  lg:flex-col items-start">
                {brand?.map(({ name }) =>
                    <SearchBrandButton key={name} name={name} />
                )}
            </div>
        </div>
    )

};
