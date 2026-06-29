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
    const urlImage = process.env.NEXT_PUBLIC_URL_HOST_CLIENT + "assets/" + img + "FILE_ID?width=400&format=webp"
    const pathname = "/blogs/" + id
    const posted = dayjs(create_date).format("D MMMM YYYY")
    return (
        <motion.div
            className="relative border-b-8 hover:shadow-xl/50 border-orange aspect-square lg:-4/3 w-full  lg:w-full rounded-2xl overflow-hidden active:scale-95 ease-out duration-300 group"
            variants={motionVariant.scale_up(.2 * index)}
        >
            <Link className="" href={{ pathname }}>
                <div className="absolute z-30 bottom-0 left-1/2 -translate-x-1/2 w-full p-6  md:p-4 lg:p-6 text-white truncate flex flex-col *:w-full justify-end items-end gap-2 ">
                    <span className=" pt-8 text-wrap font-semibold  md:text-[12px] lg:text-[18px] transition-all origin-top duration-300 group-hover:overflow-visible group-hover:whitespace-normal group-hover:text-clip " >{title}</span>
                    <span className=" max-h-20 md:max-h-15 lg:max-h-12.5 group-hover:max-h-37.5 transition-all text-wrap text-[12px] md:text-[8px] lg:text-[14px] ease-in-out duration-500  overflow-hidden  text-gray-3 flex flex-col gap-4 ">
                        {subtitle}
                    </span>
                    <span className=" text-white text-[14px] md:text-[10px] lg:text-[14px]  w-full uppercase"> วันที่เผยแพร่เมื่อ : {posted}</span>
                </div>
                <SquareArrowOutUpRight className=" absolute top-4 right-4 z-30  text-white lg:text-transparent group-hover:text-white  ease-out duration-300" strokeWidth={3} />
                <div className=" bg-black/50 brightness-50 group-hover:bg-black/80 duration-300 w-full h-full absolute z-20 ease-out" />
                <Image className="w-full h-full object-cover group-hover:scale-125 aspect-square duration-700 ease-in-out" src={urlImage} width={0} height={0} alt="" unoptimized />
            </Link>
        </motion.div>
    )
};
