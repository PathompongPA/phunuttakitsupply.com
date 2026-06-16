"use client"

import Link from "next/link"
import { useSearchParams } from "next/navigation"

type Props = {
    name: string
}

export default function SearchBrandButton({ name }: Props) {
    // const router = useRouter()
    const searchParams = useSearchParams()

    const brands = searchParams.getAll("brand")
    const isActive = brands.includes(name)

    // const toggleBrand = () => {
    //     const params = new URLSearchParams(window.location.search)

    //     const currentBrands = params.getAll("brand")
    //     const exists = currentBrands.includes(name)

    //     params.delete("brand")

    //     if (exists) {
    //         currentBrands
    //             .filter((item) => item !== name)
    //             .forEach((item) => {
    //                 params.append("brand", item)
    //             })
    //     } else {
    //         currentBrands.forEach((item) => {
    //             params.append("brand", item)
    //         })

    //         params.append("brand", name)
    //     }

    //     router.push(`/products?${params.toString()}`)
    // }

    return (
        <Link href={{ query: { brand: name } }}
            // onClick={toggleBrand}
            className="flex items-center gap-2 cursor-pointer  active:scale-90 duration-300 "
            type="button"
        >
            <div
                className={`
                     w-3 h-3 md:w-2.5 md:h-2.5 border-2 border-gray-2 ease-in-out
          ${isActive ? "bg-orange" : "border-gray-300"}
        `}
            />

            <span
                className={`
                text-[10px] font-semibold md:text-[10px] text-gray-3  select-none  hover:cursor-pointer text-nowrap text-start  
          ${isActive ? "text-gray-5" : "text-gray-500"}
        `}
            >
                {name}
            </span>
        </Link>
    )
}