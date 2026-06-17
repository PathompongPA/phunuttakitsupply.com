import { getData } from "@/utility"
import { ChevronDown, Download, } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

type prop = {
    product_name: string

}
export default async function Product({ product_name }: prop) {
    const _name = decodeURIComponent(product_name)

    const option = {
        filter: {
            name:
            {
                _icontains: _name
            }
        },
        fields: [
            "*",
            {
                images: [
                    "*",
                    {
                        directus_files_id: [
                            "id",
                            "title",
                            "filename_download"
                        ]
                    }
                ],
                type: ["name"],
                category: ["name"],
                brand: ["name"],
            }
        ]
    }
    const [product] = await getData("product", option)
    const thumbnailUrl = process.env.NEXT_PUBLIC_URL_HOST_CLIENT + "assets/" + product?.thumbnail
    const docPath = process.env.NEXT_PUBLIC_URL_HOST_CLIENT + "assets/" + product?.document
    const brand = product?.brand?.name
    const category = product?.category?.name
    // const name = product?.name
    const description = product?.description
    const description2 = product?.description2
    const urlLine = "https://line.me/ti/p/NuDh2mAbCf"
    const email = "sales@example.com"
    const subject = encodeURIComponent(
        `Request for Quotation (RFQ) - ${product?.name ?? ""}`
    )

    const body = encodeURIComponent(`
        เรียน ฝ่ายขาย

ขอใบเสนอราคาสำหรับสินค้ารายการดังต่อไปนี้

ชื่อสินค้า: ${product?.name ?? "-"}
รายละเอียดสินค้า: ${product?.description ?? "-"}

กรุณาส่งใบเสนอราคา พร้อมรายละเอียดเงื่อนไขการชำระเงิน ระยะเวลาจัดส่ง และข้อมูลที่เกี่ยวข้องกลับมายังอีเมลนี้

ขอแสดงความนับถือ
`.trim())

    const urlEmail = `mailto:${email}?subject=${subject}&body=${body}`

    return (
        <div className=" flex flex-col items-center pb-8">
            <div className=" p-4 py-8 flex flex-col md:grid md:grid-cols-2  gap-4 lg:gap-8 lg:pt-16 lg:pb-8 lg:px-32 h-fit w-full max-w-7xl ">
                <div className=" w-full">
                    <Image className="w-full aspect-square object-cover " src={thumbnailUrl} alt="" width={0} height={0} unoptimized />
                </div>
                <div className="flex flex-col gap-4">
                    <div className=" flex w-full justify-between  *:text-gray-4 *:text-[12px]">
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
                    <div className=" flex flex-col gap-8 ">
                        <div className=" md:text-[12px] text-[14px] text-gray-4 " dangerouslySetInnerHTML={{ __html: description }}></div>
                        <div className=" flex flex-col lg:flex-row justify-center items-center md:justify-end w-full lg:px-2 ">
                            {product?.document &&
                                <a href={docPath} download target="_blank">
                                    <button className=" border-gray-3/50 text-gray-3 text-[12px] lg:text-[10px] w-fit h-fit font-normal orange cursor-pointer hover:scale-95 p-1 flex items-center gap-1 rounded-3xl px-2 active:scale-90 duration-300 ease-in-out" type="button">
                                        ข้อมูลสินค้าฉบับเต็ม
                                        <Download className="font-bold" width={12} strokeWidth={3} />
                                    </button>
                                </a>}
                        </div>
                    </div>
                    <div className=" flex flex-col md:flex-row gap-4 justify-center items-center *:shadow-xl/50 *:shadow-gray-3/50">
                        <a className="  text-[16px] w-full   text-center p-4 rounded-3xl bg-gray-2  lg:hover:scale-95 duration-300 text-lime-500 font-bold" type="button" href={urlLine} target="_black">ADD LINE</a>
                        <a className=" text-[16px]  text-center w-full rounded-3xl font-bold p-4 bg-orange text-white active:scale-75 cursor-pointer lg:hover:scale-95 duration-300 ease-in-out" type="button" href={urlEmail} > ขอใบเสนอราคา</a>
                    </div>
                </div>
            </div>
            <details className="max-w-6xl w-full duration-300 text-[14px] list-none flex flex-col gap-4 px-4 lg:p-0 " open >
                <summary className=" text-[16px] lg:text-[20px] py-4 font-semibold select-none flex justify-between cursor-pointer  border-b border-gray-3">
                    ข้อมูลเพิ่มเติม <ChevronDown strokeWidth={3} />
                </summary>
                <div className=" px-2 py-4 md:p-2 lg:py-4 md:text-[12px] lg:text-[14px] bg-gray-1/50 text-gray-4" dangerouslySetInnerHTML={{ __html: product.description2 }} />
            </details>
        </div>
    )
};
