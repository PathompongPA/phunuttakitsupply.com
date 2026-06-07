import Image from "next/image"

type prop = {
    id?: string,
    name?: string,
    thumbnail?: string,
    file: string
}
export default function CatalogCard({ name, thumbnail, file }: prop) {
    const urlImage = process.env.NEXT_PUBLIC_URL_HOST_CLIENT + "assets/" + thumbnail
    const urlFile = process.env.NEXT_PUBLIC_URL_HOST_CLIENT + "assets/" + file
    return (
        <a className=" p-1 lg:p-2 flex flex-col gap-2 w-full border-gray-2 border-2  aspect-3/4 rounded-lg" href={urlFile} download target="_blank" >
            <Image className=" w-full h-full object-contain border-transparent" src={urlImage} alt="" width={0} height={0} unoptimized priority />
            <div className=" w-full text-center text-gray-4 text-[12px]">{name}</div>
        </a>
    )

};
