import Image from "next/image";
import Link from "next/link";
type prop = {
    name?: string,
    category?: string,
    type?: string,
    brand?: string,
    img?: string[]
    thumbnail?: string
}

export default function ProductCard({ name, thumbnail, brand, category, type }: prop) {
    const pathname = "/products/" + name
    const urlThumbnail = process.env.NEXT_PUBLIC_URL_HOST + "assets/" + thumbnail
    return (
        <Link href={{ pathname }}>
            <Image className=" aspect-square object-cover w-full" src={urlThumbnail} alt="" width={0} height={0} unoptimized />
            <div className=" flex flex-col gap-0 p-2">
                <div className="font-semibold text-[12px] lg:text-[10px] text-gray-3">{brand}</div>
                <span className="font-bold text-[16px] text-gray-5">{name}</span>
                <div className=" *:text-[12px] *:lg:text-[10px] text-gray-3 *:truncate font-light flex  flex-row justify-between  ">
                    <div className="">{category}</div>
                    <div className="">{type}</div>
                </div>
                <div className=" my-2 p-2 text-[14px] lg:text-[10px] font-semibold text-center rounded-lg bg-orange text-white">รายละเอียด</div>
            </div>
        </Link>
    )

};
