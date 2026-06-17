import Image from "next/image";
import Link from "next/link";
type prop = {
    name?: string,
    category?: string,
    type?: string,
    brand?: string,
    img?: string[]
    thumbnail?: string
    brandImage?: string
}

export default function ProductCard({ name, thumbnail, brand, category, type, brandImage }: prop) {
    const pathname = "/products/" + name
    const urlThumbnail = process.env.NEXT_PUBLIC_URL_HOST_CLIENT + "assets/" + thumbnail
    const urlBrand = process.env.NEXT_PUBLIC_URL_HOST_CLIENT + "assets/" + brandImage
    return (
        <Link href={{ pathname }} className="flex flex-col justify-between border border-gray-2 rounded-lg relative active:scale-90 duration-200  ease-in-out lg:hover:shadow-xl/50 shadow-gray-3/50 lg:hover:border-3 overflow-hidden group  ">
            <div className=" absolute top-0 right-2 bg-white border aspect-square h-10 border-gray-2 border-t-0 rounded-b-lg z-30 ">
                <Image className="w-full h-full object-contain" src={urlBrand} alt="" width={0} height={0} unoptimized />
            </div>
            <Image className=" group-hover:scale-110 z-0 duration-300 aspect-square object-cover w-full" src={urlThumbnail} alt="" width={0} height={0} unoptimized />
            <div className=" flex flex-col gap-1 p-2 ">
                <div className="font-semibold text-[10px] lg:text-[10px] text-gray-3">{brand}</div>
                <span className="font-semibold text-[12px] text-gray-5">{name}</span>
                <div className=" *:text-[10px] *:lg:text-[10px] text-gray-3 *:truncate font-light flex  flex-row justify-between  ">
                    <div className="">{category}</div>
                    <div className="">{type}</div>
                </div>
                <div className=" my-2 p-2 text-[10px] lg:text-[10px] font-semibold text-center rounded-3xl bg-orange text-white">รายละเอียด</div>
            </div>
        </Link>
    )

};
