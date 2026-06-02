import { SquareArrowOutUpRight } from "lucide-react"
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
        <Link className="relative border-b-8 border-orange aspect-square min-w-62.5 lg:w-full rounded-2xl overflow-hidden hover:scale-115 ease-out duration-500 group" href={{ pathname }}>
            <div className="absolute bottom-0 left-1/2 gap-2  -translate-x-1/2 w-full p-4  z-10 text-white truncate flex flex-col *:w-full justify-end items-end">
                <span className=" truncate text-[16px]  font-semibold transition-all origin-top duration-500 group-hover:overflow-visible group-hover:whitespace-normal group-hover:text-clip " >{title}</span>
                <span className=" h-10 group-hover:h-30 transition-all text-wrap text-[10px] duration-500  overflow-hidden  text-gray-3">{subtitle}</span>
            </div>
            <SquareArrowOutUpRight className=" absolute top-4 right-4 z-10  text-transparent group-hover:text-gray-2 duration-500" strokeWidth={3} />
            <Image className="w-full h-full object-cover aspect-square brightness-45 duration-500 ease-out group-hover:brightness-25 " src={urlImage} width={0} height={0} alt="" unoptimized />
        </Link>

    )
};
