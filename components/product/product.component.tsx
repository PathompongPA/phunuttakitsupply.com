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
        fields: ["brand.name", "category.name", "thumbnail", "name", "description", "doc"]
    }
    const [product] = await getData("product", option)
    const thumbnailUrl = process.env.NEXT_PUBLIC_URL_HOST + "assets/" + product?.thumbnail
    const docPath = process.env.NEXT_PUBLIC_URL_HOST + "assets/" + product?.doc
    const brand = product?.brand?.name
    const category = product?.category?.name
    const name = product?.name
    const description = product?.description
    const email = "test@example.com"
    const subject = encodeURIComponent("สอบถามสินค้า")
    const body = encodeURIComponent(`สวัสดีครับ ผมสนใจสินค้า รบกวนติดต่อกลับด้วยครับ`)
    const urlEmail = `mailto:${email}?subject=${subject}&body=${body}`
    const urlLine = "https://youtube.com"

    return (
        <div className=" p-4 py-8 flex flex-col lg:grid lg:grid-cols-2  gap-4 lg:gap-8 lg:pt-16 lg:pb-8 lg:px-32 h-fit max-w-7xl ">
            <div className=" w-full">
                <Image className="w-full aspect-square object-cover " src={thumbnailUrl} alt="" width={0} height={0} unoptimized />
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
                        {product?.doc &&
                            <a href={docPath} download target="_blank">
                                <button className=" text-[12px] w-fit h-fit font-normal bg-orange cursor-pointer hover:scale-95 text-white p-1 flex items-center gap-1 rounded-3xl px-2 active:scale-90 duration-300 ease-in-out" type="button">
                                    ข้อมูลสินค้าฉบับเต็ม
                                    <Download className="font-bold" width={15} strokeWidth={3} />
                                </button>
                            </a>
                        }
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
                        className="flex w-full items-center justify-center text-gray-3 text-sm active:scale-90 duration-300 ease-in-out hover:scale-95 hover:text-gray-5 cursor-pointer "
                        htmlFor="description"
                    >
                        <span className=" underline  ">ข้อมูลสินค้าเพิ่มเติม</span>
                        <ChevronDown className=" peer-checked/description:rotate-180" />
                    </label>
                </div>
                <div className=" w-full flex flex-col gap-4">
                    <a className="text-[18px] text-center w-full rounded-3xl font-bold p-4 bg-orange text-white active:scale-75 cursor-pointer hover:scale-95 duration-300 ease-in-out" type="button" href={urlEmail} > ขอใบเสนอราคา</a>
                    <a className="active:scale-75 text-center duration-300 ease-in-out underline text-[16px] text-gray-4 lg:text-gray-3 hover:text-gray-5 cursor-pointer hover:scale-90" type="button" href={urlLine}>สอบถามเพิ่มเติม</a>
                </div>
            </div>
        </div>
    )
};
