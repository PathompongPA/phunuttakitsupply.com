import Image from "next/image"
import Link from "next/link"
type queryType = {
    category?: string
}
type prop = {
    name?: string,
    name_en?: string,
    img?: string,
    query?: queryType,
    index?: number
}
export default async function CategoryCard({ name, name_en, img, query, index }: prop) {
    const imageUrl = process.env.NEXT_PUBLIC_URL_HOST_CLIENT + "assets/" + img || ""
    const pathname = "/products"
    return (
        <Link className={` w-full h-full  relative *:w-full font-bold aspect-square rounded-3xl bg-white p-8 ${index === 0 ? "col-span-4 row-span-2 md:col-span-2  text-[24px]" : " col-span-2 md:col-span-1 text-[16px]"}`} href={{ pathname, query }}>
            <Image className=" w-full aspect-square object-cover" src={imageUrl} alt="" width={0} height={0} unoptimized />
            <div className=" flex flex-col justify-center items-center *:truncate overflow-hidden absolute bottom-2 left-1/2 -translate-x-1/2 ">
                <span>{name}</span>
                <span className="text-orange">{name_en}</span>
            </div>
        </Link>
    )
};
