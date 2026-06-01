import { getData } from "@/utility"
import { ChevronDown, Download, } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

type prop = {
    product_name: string

}
export default async function Product({ product_name }: prop) {
    const option = {
        filter: {
            name: product_name
        },
        fields: ["brand.name", "category.name", "thumbnail", "name", "description"]
    }
    const [product] = await getData("product", option)
    const thumbnailUrl = process.env.NEXT_PUBLIC_URL_HOST + "assets/" + product?.thumbnail
    const brand = product?.brand?.name
    const category = product?.category?.name
    const name = product?.name
    const description = product?.description
    return (
        <div className=" p-4 py-8 flex flex-col lg:grid lg:grid-cols-2  gap-4 lg:gap-8 lg:py-8 lg:px-8 h-fit max-w-7xl ">
            <div className=" w-full">
                <Image className="w-full border aspect-square object-cover " src={thumbnailUrl} alt="" width={0} height={0} unoptimized />
            </div>
            <div className="flex flex-col gap-4">
                <div className=" flex w-full justify-between  *:text-gray-4 *:text-[14px]">
                    <div className=""> Brand :
                        <Link
                            className="font-bold underline active:scale-90 duration-300 ease-in-out"
                            href={{
                                pathname: "/products",
                                query: { brand }
                            }}
                        >
                            {brand}
                        </Link>
                    </div>
                    <div className=""> Category :
                        <Link
                            className="font-bold underline active:scale-90 duration-300 ease-in-out "
                            href={{
                                pathname: "/products",
                                query: { category }
                            }}
                        >
                            {category}
                        </Link>
                    </div>
                </div>
                <div className=" flex flex-col gap-4">
                    <div className=" flex flex-col lg:flex-row justify-between">
                        <h1 className="text-[32px] font-extrabold text-gray-5" >{name}</h1>
                        <button className=" text-[12px] w-fit h-fit font-normal bg-orange text-white p-1 flex items-center gap-1 rounded-lg active:scale-90 duration-300 ease-in-out" type="button">
                            ข้อมูลสินค้าฉบับเต็ม
                            <Download className="font-bold" width={15} />
                        </button>
                    </div>
                    <input className="peer/description" type="checkbox" id="description" hidden />
                    <section
                        className=" 
                         duration-700
                          ease-out
                        max-h-25 
                        overflow-hidden text-[14px] text-gray-4 relative peer-checked/description:max-h-screen"
                    >
                        {description}
                    </section>
                    <label
                        className="flex w-full items-center justify-center text-gray-4 active:scale-90 duration-300 ease-in-out "
                        htmlFor="description"
                    >
                        <span className=" underline ">ข้อมูลสินค้าเพิ่มเติม</span>
                        <ChevronDown className=" peer-checked/description:rotate-180" />
                    </label>
                </div>
                <div className=" w-full flex flex-col gap-4">
                    <button className="text-[20px] w-full rounded-lg font-bold p-4 bg-orange text-white active:scale-90 duration-300 ease-in-out" type="button"> ขอใบเสนอราคา</button>
                    <button className="active:scale-90 duration-300 ease-in-out underline text-[16px] text-gray-3" type="button">สอบถามเพิ่มเติม</button>
                </div>
            </div>
        </div>
    )
};
