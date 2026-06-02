import { getData } from "@/utility"
import SearchTypeButton from "./type.button.component"

export default async function SearchTypeProduct() {
    const typeProduct = await getData("type", {})

    return (
        <div className=" flex flex-col gap-4 px-4 py-2 " >
            <h2 className=" text-gray-5 text-[16px] lg:text-[12px] underline">ประเภท</h2>
            <div className=" flex gap-4 lg:flex-col">
                {typeProduct?.map(({ name }) =>
                    <SearchTypeButton key={name} name={name} />
                )}
            </div>
        </div>
    )

};
