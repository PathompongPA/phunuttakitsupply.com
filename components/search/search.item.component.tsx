import { getData } from "@/utility"
import Image from "next/image"
import Link from "next/link"

export default async function ItemSearch() {
    const items = await getData("product", {
        fields: ["name", "thumbnail", "brand.name", "category.name", "type.name"]
    })
    const url = process.env.NEXT_PUBLIC_URL_HOST + "assets/"
    const title = `ผลลัพธ์ ${items?.length} จาก 215 รายการ`
    return (
        <div className=" flex flex-col gap-2">
            <h2 className="text-gray-3 text-[14px] w-full text-end">{title}</h2>
            <div className="grid grid-cols-2 gap-2 w-full aspect-square">{
                items?.map(({ name, thumbnail, brand, category, type }) => {
                    const pathname = `/products/${name}`
                    return (
                        <Link href={{ pathname }} className=" aspect-square  rounded-lg" key={name}>
                            <Image className=" w-full h-full object-cover" src={url + thumbnail} width={0} height={0} alt={name} unoptimized />
                            <div className=" flex flex-col gap-0 p-2">
                                <div className="font-semibold text-[12px] text-gray-3">{brand?.name}</div>
                                <span className="font-bold text-[16px] text-gray-5">{name}</span>
                                <div className=" *:text-[12px] text-gray-3 *:truncate font-light flex  flex-row justify-between  ">
                                    <div className="">{category.name}</div>
                                    <div className="">{type.name}</div>
                                </div>
                                <div className=" my-2 p-2 text-[14px] font-semibold text-center rounded-lg bg-orange text-white">รายละเอียด</div>
                            </div>
                        </Link>
                    )
                }
                )
            }</div>

        </div>
    )

};
