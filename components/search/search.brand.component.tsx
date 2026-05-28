import { getData } from "@/utility"

export default async function SearchBrand() {
    const brand = await getData("brand", {})
    return (
        <div className=" p-4 flex flex-col gap-2 ">
            <h2 className=" underline text-[16px] text-gray-5">แบรนด์</h2>
            <div className=" flex gap-4 ">
                {brand?.map(({ name }) =>
                    <div className=" flex items-center justify-center gap-2" key={name}>
                        <input className="peer/brand" type="checkbox" id={name} hidden />
                        <div className=" border-2 w-3.75 h-3.75 border-gray-2 peer-checked/brand:bg-orange"></div>
                        <label className=" text-[16px] font-semibold lg:text-[10px] text-gray-3 peer-checked/brand:text-gray-5 select-none  hover:cursor-pointer  " htmlFor={name}> {name} </label>
                    </div>
                )}
            </div>
        </div>
    )

};
