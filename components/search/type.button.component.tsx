"use client"

import Link from "next/link"
import { useSearchParams } from "next/navigation"

type Props = {
    name: string,
    amount?: number
}

export default function SearchTypeButton({ name, amount }: Props) {
    const searchParams = useSearchParams()
    const brands = searchParams.getAll("type")
    const isActive = brands.includes(name)
    return (
        <Link href={{ query: { type: name } }}

            className="flex items-center gap-2 cursor-pointer  active:scale-90 duration-300 "
            type="button"
        >
            <div
                className={` w-3 h-3 md:w-2.5 md:h-2.5 border-2 border-gray-2 peer-checked/type:bg-orange  ease-in-out ${isActive ? "bg-orange" : "border-gray-300"} `}
            />

            <span
                className={`
                text-[10px] font-semibold md:text-[10px] text-gray-3 text-start text-nowrap  select-none  hover:cursor-pointer  
          ${isActive ? "text-gray-5" : "text-gray-500"}
        `}
            >
                {decodeURIComponent(name).replace(/\s+/g, " ").trim()} {`(${amount})`}
            </span>
        </Link>
    )
}

