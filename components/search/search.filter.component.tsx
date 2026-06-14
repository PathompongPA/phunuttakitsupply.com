import { ChevronDown } from "lucide-react";
import SearchTypeProduct from "./search.type.component";
import SearchBrand from "./search.brand.component";
import Link from "next/link";

export default function SearchFilter() {
    return (
        <div className=" flex flex-col select-none p-2 md:p-4 rounded-3xl bg-gray-2 md:bg-transparent lg:h-fit ">
            <input className="peer/filter" type="checkbox" id="filter" hidden defaultChecked />
            <label className=" flex items-center hover:cursor-pointer  gap-0 w-full justify-between active:scale-95 duration-300 rounded-lg active group " htmlFor="filter">
                <span className="text-[14px] px-2 py-1  md:text-[16px] text-nowrap font-bold text-gray-5 group-active:text-gray-4 ease-out"> ตัวกรองข้อมูล </span>
                <ChevronDown className=" peer-checked:rotate-180  w-4 lg:w-4" strokeWidth={4} />
            </label>
            <div className=" flex flex-col max-h-0 scale-y-0 gap-2  origin-bottom ease-in-out peer-checked/filter:max-h-screen peer-checked/filter:scale-y-100 overflow-hidden duration-700 ">
                <SearchTypeProduct />
                <SearchBrand />
                <Link className=" active:scale-90  duration-300 ease-out w-full  text-gray-4 md:text-gray-6 rounded-3xl py-2 text-center text-[12px] underline lg:py-1 md:text-[10px] font-bold" href={{ pathname: "/products" }}>ล้างการค้นหา</Link>
            </div>
        </div >
    )

};
