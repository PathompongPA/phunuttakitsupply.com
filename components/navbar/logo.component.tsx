import Image from "next/image";
import Link from "next/link";
import logo from "../../public/image/834cfc12-b631-4ea7-891c-6673ef0b647d-removebg-preview.png"
export default function Logo() {
    return (
        <Link className="flex justify-center items-center gap-1 p-0 " href={{ pathname: "/" }}>
            <Image className=" max-w-[40px] lg:max-w-[35px] " src={logo} alt="" />
            <div className=" text-nowrap flex flex-col ">
                <span className="font-bold text-[12px] lg:text-[12px] text-orange ">บริษัท ภูณัฐกิจ ซัพพลายส์ จำกัด</span>
                <span className=" text-[8px] lg:text-[8px] text-gray-6 font-bold">PHUNATTAKIT SUPPLY COMPANY LIMITED</span>
            </div>
        </Link>
    )

};
