import { getData } from "@/utility"
import SearchTypeButton from "./type.button.component"

export default async function SearchTypeProduct() {
    const typeProduct = await getData("type", {})

    return (
        typeProduct.length !== 0 &&
        <div className=" flex flex-col gap-4 px-4 py-2 " >
            <span className=" text-gray-5 text-[12px] md:text-[12px] underline">ประเภท</span>
            <div className=" flex gap-4 md:flex-col flex-wrap">
                {typeProduct?.map(({ name }) =>
                    <SearchTypeButton key={name} name={name} />
                )}
            </div>
        </div>
    )

};
