import { LoaderCircleIcon } from "lucide-react";

export default function LoadingComponent() {
    return (
        <div className=" fixed top-0 right-0 w-full h-full text-4xl text-black z-99 flex justify-center items-center flex-col gap-2 bg-white ">
            {/* <span className=" text-orange font-bold text-[10px] z-50 lg:text-[16px] ">บริษัท ภูณัฐกิจ ซัพพลายส์ จำกัด</span>
            <span className=" text-[8px] lg:text-[10px] z-50 text-gray-6 font-bold">PHUNATTAKIT SUPPLY COMPANY LIMITED</span> */}
            <LoaderCircleIcon className=" text-orange animate-spin absolute " size={50} strokeWidth={2} />
        </div >
    )

};
