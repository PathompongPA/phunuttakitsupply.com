"use client"
import { useRouter, useSearchParams } from "next/navigation"

type Props = {
    name: string,
    amount?: number
}

export default function SearchTypeButton({ name, amount }: Props) {
    const searchParams = useSearchParams()
    const brands = searchParams.getAll("type")
    const isActive = brands.includes(name)
    const router = useRouter()
    const toggleType = () => {
        const params = new URLSearchParams(window.location.search)
        params.delete("brand")

        const currentBrand = params.get("type")

        if (currentBrand === name) {
            params.delete("type")
        } else {
            params.set("type", name)
        }

        router.push(`/products?${params.toString()}`)
    }
    return (
        <button
            onClick={toggleType}

            className="flex items-center gap-2 cursor-pointer  active:scale-90 duration-300 "
            type="button"
        >
            <div
                className={` w-3 h-3 md:w-2.5 md:h-2.5 border-2 border-gray-3 peer-checked/type:bg-orange  ease-in-out ${isActive ? "bg-orange border-orange" : "border-gray-3"} `}
            />

            <span
                className={`
                text-[10px] font-semibold md:text-[10px] text-gray-5 text-start text-nowrap  select-none  hover:cursor-pointer  
          ${isActive ? "text-gray-5" : "text-gray-5"}
        `}
            >
                {decodeURIComponent(name).replace(/\s+/g, " ").trim()} {amount && `(${amount})`}
            </span>
        </button>
    )
}

