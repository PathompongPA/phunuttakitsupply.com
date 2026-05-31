import Image from "next/image"
import Link from "next/link"

type prop = {
    id: string,
    title?: string,
    subtitle?: string,
    img?: string
}

export default function BlogCard({ id, title, subtitle, img }: prop) {
    const urlImage = process.env.NEXT_PUBLIC_URL_HOST + "assets/" + img
    const pathname = "/blogs/" + id
    return (
        <Link className="relative border-b-4 border-orange aspect-square min-w-62.5 lg:w-full rounded-t-lg overflow-hidden" href={{ pathname }}>
            <div className="absolute bottom-0 left-1/2 gap-4 -translate-x-1/2 w-full p-4  z-10 text-white truncate flex flex-col *:w-full text-end">
                <span className=" truncate text-[20px] font-bold" >{title}</span>
                <span className=" truncate text-base font-semibold text-gray-3">{subtitle}</span>
            </div>
            <Image className="w-full h-full object-cover aspect-square brightness-45 " src={urlImage} width={0} height={0} alt="" unoptimized />
        </Link>

    )
};
