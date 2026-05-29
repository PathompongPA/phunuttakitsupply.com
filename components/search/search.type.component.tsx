import { getData } from "@/utility"

export default async function SearchTypeProduct() {
    const typeProduct = await getData("type", {})

    return (
        <div className=" flex flex-col gap-4 px-4 py-2 " >
            <h2 className=" text-gray-5 text-[16px] lg:text-[12px] underline">ประเภท</h2>
            <div className=" flex gap-4 lg:flex-col">
                {typeProduct?.map(({ name }) =>
                    <label className=" flex gap-2 items-center active:scale-90 duration-300 " key={name} htmlFor={name}>
                        <input className=" peer/type" id={name} type="checkbox" hidden />
                        <div className=" w-3.75 h-3.75 lg:w-2.5 lg:h-2.5 border-2 border-gray-2 peer-checked/type:bg-orange  ease-in-out"></div>
                        <span className=" text-[16px] font-semibold lg:text-[10px] text-gray-3 peer-checked/type:text-gray-5 select-none  hover:cursor-pointer  " >{name}</span>
                    </label>
                )}
            </div>
        </div>
    )

};
