"use client"

import { useRouter, useSearchParams } from "next/navigation"

type Props = {
    name: string
}

export default function SearchBrandButton({ name }: Props) {
    const router = useRouter()
    const searchParams = useSearchParams()

    const brands = searchParams.getAll("brand")
    const isActive = brands.includes(name)

    const toggleBrand = () => {
        const params = new URLSearchParams(window.location.search)

        const currentBrands = params.getAll("brand")
        const exists = currentBrands.includes(name)

        params.delete("brand")

        if (exists) {
            currentBrands
                .filter((item) => item !== name)
                .forEach((item) => {
                    params.append("brand", item)
                })
        } else {
            currentBrands.forEach((item) => {
                params.append("brand", item)
            })

            params.append("brand", name)
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
                     w-3.75 h-3.75 lg:w-2.5 lg:h-2.5 border-2 border-gray-2 peer-checked/type:bg-orange  ease-in-out
          ${isActive ? "bg-orange" : "border-gray-300"}
        `}
            />

            <span
                className={`
                text-[16px] font-semibold lg:text-[10px] text-gray-3  select-none  hover:cursor-pointer  
          ${isActive ? "text-gray-5" : "text-gray-500"}
        `}
            >
                {name}
            </span>
        </button>
    )
}