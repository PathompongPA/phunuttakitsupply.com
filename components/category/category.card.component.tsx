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
                  hover:scale-97
        relative overflow-hidden
        w-full aspect-square rounded-3xl bg-white p-4
        transition-all

        ${index === 0
                    ? "col-span-4 row-span-2 md:col-span-2 text-[24px]"
                    : "col-span-2 md:col-span-1 text-[16px]"
                }
      `}
            variants={motionVariant.scale_up(0)}
        >
            <div className="flex h-full flex-col">

                {/* image */}
                <div className="flex-1 overflow-hidden flex items-center justify-center duration-300">
                    {imageUrl && (
                        <Image
                            className="h-full w-full object-contain group-hover:lg:scale-125 duration-300 group-hover:delay-200"
                            src={imageUrl}
                            alt={name || ""}
                            width={500}
                            height={500}
                            unoptimized
                        />
                    )}
                </div>

                {/* text */}
                <div className="shrink-0 pt-3 text-center overflow-hidden  group-hover:scale-duration-300 font-semibold *:truncate">
                    <p className=""> {name} </p>
                    <p className="text-orange "> {name_en} </p>
                </div>

            </div>
        </MotionLink>
    )
}