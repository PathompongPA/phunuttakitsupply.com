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
    query,
    index = 0,
}: Props) {

    const pathname = "/products"
    const imageUrl = process.env.NEXT_PUBLIC_URL_HOST_CLIENT + "assets/" + img
    return (
        <MotionLink
            href={{ pathname, query }}
            className={`
                origin-center
                ease-out
                group
                duration-300
                relative overflow-hidden
                w-full aspect-square rounded-3xl bg-white p-4  lg:p-0
                transition-all
                font-semibold
                z-30
                 shadow-gray-3/75
                  border-2
                   border-transparent
                 hover:border-gray-2
                  active:scale-90

        ${index === 0
                    ? "col-span-4 row-span-2 md:col-span-2 text-[22px] md:text-[24px] lg:text-[28px] hover:shadow-xl/50 "
                    : "col-span-2 md:col-span-1 text-[14px] lg:text-[14px] hover:shadow-xl/50 "
                }
      `}
            variants={motionVariant.scale_up(0)}
        >
            <div className="flex h-full flex-col justify-center items-center ">

                {/* image */}
                {imageUrl && (
                    <div className=" h-full ">
                        <Image
                            className=" w-full h-full aspect-video object-contain group-hover:lg:scale-115 duration-300 group-hover:delay-150"
                            src={imageUrl}
                            alt={name || ""}
                            width={0}
                            height={0}
                            unoptimized
                        />
                    </div>
                )}

                {/* text */}
                <div className="shrink-0 text-center overflow-hidden  group-hover:scale-duration-300 *:truncate w-full p-2 z-10 bg-white/75">
                    <p className=""> {name} </p>
                    <p className="text-orange "> {name_en} </p>
                </div>

            </div>
        </MotionLink>
    )
}