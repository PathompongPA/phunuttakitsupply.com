"use client"

import { useRouter, useSearchParams } from "next/navigation"

type Props = {
    name: string
}

export default function SearchTypeButton({ name }: Props) {
    const router = useRouter()
    const searchParams = useSearchParams()

    const brands = searchParams.getAll("type")
    const isActive = brands.includes(name)

    const toggleBrand = () => {
        const params = new URLSearchParams(window.location.search)

        const currentBrands = params.getAll("type")
        const exists = currentBrands.includes(name)

        params.delete("type")

        if (exists) {
            currentBrands
                .filter((item) => item !== name)
                .forEach((item) => {
                    params.append("type", item)
                })
        } else {
            currentBrands.forEach((item) => {
                params.append("type", item)
            })

            params.append("type", name)
        }

        router.push(`/products?${params.toString()}`)
    }

    return (
        <button
            onClick={toggleBrand}
            className="flex items-center gap-2 cursor-pointer  active:scale-90 duration-300 "
            type="button"
        >
            <div
                className={`
                     w-3 h-3 md:w-2.5 md:h-2.5 border-2 border-gray-2 peer-checked/type:bg-orange  ease-in-out
          ${isActive ? "bg-orange" : "border-gray-300"}
        `}
            />

            <span
                className={`
                text-[10px] font-semibold md:text-[10px] text-gray-3 text-start text-nowrap  select-none  hover:cursor-pointer  
          ${isActive ? "text-gray-5" : "text-gray-500"}
        `}
            >
                {decodeURIComponent(name).replace(/\s+/g, " ").trim()}
            </span>
        </button>
    )
}

