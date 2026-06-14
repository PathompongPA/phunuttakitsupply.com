import dayjs from "dayjs"
import { SquareArrowOutUpRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import * as motion from "motion/react-client"
import { motionVariant } from "@/motion/motion"

type prop = {
    id: string,
    title?: string,
    subtitle?: string,
    img?: string
    create_date?: string
    index: number
}

export default function BlogCard({ id, title, subtitle, img, create_date, index }: prop) {
    const urlImage = process.env.NEXT_PUBLIC_URL_HOST_CLIENT + "assets/" + img
    const pathname = "/blogs/" + id
    const posted = dayjs(create_date).format("D MMMM YYYY")
    return (
        <motion.div
            className="relative border-b-8 hover:shadow-xl/50 border-orange aspect-square w-full  lg:w-full rounded-lg overflow-hidden active:scale-90 ease-out duration-500 group"
            variants={motionVariant.scale_up(.2 * index)}
        >
            <Link className="" href={{ pathname }}>
                <div className="absolute z-30 bottom-0 left-1/2 -translate-x-1/2 w-full p-4  text-white truncate flex flex-col *:w-full justify-end items-end gap-0 ">
                    <span className=" pt-8 text-wrap text-[16px] md:text-[12px]  font-semibold transition-all origin-top duration-500 group-hover:overflow-visible group-hover:whitespace-normal group-hover:text-clip " >{title}</span>
                    <span className=" lg:max-h-6.25 max-h-full group-hover:max-h-screen transition-all text-wrap text-[10px] md:text-[8px] ease-in-out duration-1300  overflow-hidden  text-gray-3 flex flex-col gap-4 ">
                        <span> {subtitle} </span>
                        <span className=" text-white  w-full uppercase"> วันที่เผยแพร่เมื่อ : {posted}</span>
                    </span>
                </div>
                <SquareArrowOutUpRight className=" absolute top-4 right-4 z-30  text-white lg:text-transparent group-hover:text-white  ease-out duration-300" strokeWidth={3} />
                <div className=" bg-black/50 brightness-50 group-hover:bg-black/80 duration-300 w-full h-full absolute z-20 ease-out" />
                <Image className="w-full h-full object-cover group-hover:scale-125 aspect-square duration-700 ease-in-out" src={urlImage} width={0} height={0} alt="" unoptimized />
            </Link>
        </motion.div>
    )
};
