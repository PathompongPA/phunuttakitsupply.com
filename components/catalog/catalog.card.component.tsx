import Image from "next/image"
import Link from "next/link"

type prop = {
    id?: string,
    name?: string,
    thumbnail?: string,
}
export default function CatalogCard({ id, name, thumbnail }: prop) {
    const urlImage = process.env.NEXT_PUBLIC_URL_HOST + "assets/" + thumbnail
    const pathname = "/catalogs/" + id
    return (
        <Link className=" p-1 lg:p-2 flex flex-col gap-2 w-full border-gray-2 border-2  aspect-3/4 rounded-lg" href={{ pathname }}>
            <Image className=" w-full h-full object-contain border-transparent" src={urlImage} alt="" width={0} height={0} unoptimized priority />
            <div className=" w-full text-center text-gray-4 text-[12px]">{name}</div>
        </Link>
    )

};
