import { ChevronDown } from "lucide-react";
import SearchTypeProduct from "./search.type.component";
import SearchBrand from "./search.brand.component";

export default function SearchFilter() {
    return (
        <div className=" flex flex-col ">
            <input className="peer/filter" type="checkbox" id="filter" hidden defaultChecked />
            <label className=" flex items-center justify-between w-full active:scale-95 duration-300 rounded-lg active group " htmlFor="filter">
                <h2 className="text-2xl font-bold text-gray-5 group-active:text-gray-4 ease-out"> ตัวกรองข้อมูล </h2>
                <ChevronDown className=" peer-checked:rotate-180 " size={24} strokeWidth={4} />
            </label>
            <div className=" flex flex-col max-h-0 scale-y-0  origin-bottom ease-in-out peer-checked/filter:max-h-125 peer-checked/filter:scale-y-100 overflow-hidden duration-700 ">
                <SearchTypeProduct />
                <SearchBrand />
                <button className=" active:scale-90 active:bg-gray-1 duration-300 ease-out w-full bg-orange text-white rounded-lg py-2 text-[20px] font-bold">ค้าหา</button>
            </div>
        </div >
    )

};
