"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { motionVariant } from "@/motion/motion"

type QueryType = {
    category?: string
}

type Props = {
    name?: string
    name_en?: string
    img?: string
    query?: QueryType
    index?: number
}

const MotionLink = motion(Link)

export default function CategoryCard({
    name,
    name_en,
    img,
    index = 0,
}: Props) {

    const pathname = `/products/${name}`
    return (
        <MotionLink
            href={{ pathname }}
            className={`
                origin-center
                ease-out
                group
                overflow-hidden
                w-full aspect-square 
                 rounded-xl
                lg:rounded-3xl
                 bg-white p-0  lg:p-0
                transition-all
                z-30
                 font-semibold
                shadow-gray-3/75
                active:scale-90
                text-white
                 relative

        ${index === 0
                    ? "col-span-4 row-span-2 md:col-span-2  text-[16px] md:text-[18px] lg:text-[22px] hover:shadow-xl/50 "
                    : "col-span-2 md:col-span-1 text-[10px] md:text-[10px] lg:text-[14px] hover:shadow-xl/50 "
                }
      `}
            variants={motionVariant.scale_up(0)}
        >
            <div className="flex h-full flex-col justify-center items-center ">

                {/* image */}
                {img && (
                    <div className=" h-full  ">
                        <Image
                            className=" w-full h-full object-contain group-hover:lg:scale-110 duration-300 group-hover:delay-100"
                            src={img}
                            alt={name || ""}
                            width={0}
                            height={0}
                            unoptimized
                        />
                    </div>
                )}

                {/* text */}
                <div className=" absolute bottom-0 shrink-0 text-center overflow-hidden  group-hover:scale-110  duration-300 *:truncate w-full p-2 z-10 flex flex-col">
                    <p className=""> {name} </p>
                    <p className="text-orange "> {name_en} </p>
                </div>

            </div>
        </MotionLink>
    )
}