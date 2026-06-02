import dayjs from "dayjs"
import { SquareArrowOutUpRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

type prop = {
    id: string,
    title?: string,
    subtitle?: string,
    img?: string
    create_date?: string
}

export default function BlogCard({ id, title, subtitle, img, create_date }: prop) {
    const urlImage = process.env.NEXT_PUBLIC_URL_HOST + "assets/" + img
    const pathname = "/blogs/" + id
    const posted = dayjs(create_date).format("D MMMM YYYY")
    return (
        <Link className="relative border-b-8 hover:border-b-10 border-orange aspect-square min-w-62.5 lg:w-full rounded-2xl overflow-hidden active:scale-105 hover:scale-115 ease-out duration-500 group" href={{ pathname }}>
            <div className="absolute bottom-0 left-1/2 gap-2  -translate-x-1/2 w-full p-4  z-10 text-white truncate flex flex-col *:w-full justify-end items-end">
                <span className=" text-wrap text-[22px] md:text-[16px]  font-semibold transition-all origin-top duration-500 group-hover:overflow-visible group-hover:whitespace-normal group-hover:text-clip " >{title}</span>
                <span className=" lg:max-h-6.25 max-h-full group-hover:max-h-screen transition-all text-wrap text-[14px] md:text-[10px] ease-in-out duration-500  overflow-hidden  text-gray-3 flex flex-col gap-4 ">
                    <span> {subtitle} </span>
                    <span className=" text-white  w-full uppercase"> วันที่เผยแพร่เมื่อ : {posted}</span>
                </span>
            </div>
            <SquareArrowOutUpRight className=" absolute top-4 right-4 z-10  text-white lg:text-transparent group-hover:text-gray-2  ease-out duration-300" strokeWidth={3} />
            <Image className="w-full h-full object-cover aspect-square brightness-45 duration-500 ease-out group-hover:brightness-25 " src={urlImage} width={0} height={0} alt="" unoptimized />
        </Link>

    )
};
