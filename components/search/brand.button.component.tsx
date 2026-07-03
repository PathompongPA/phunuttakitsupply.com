"use client"
import { useRouter, useSearchParams } from "next/navigation"

type Props = {
    name: string,
    amount?: number
}

export default function SearchBrandButton({ name, amount }: Props) {
    const searchParams = useSearchParams()
    const brands = searchParams.getAll("brand")
    const isActive = brands.includes(name)
    const router = useRouter()

    const toggleBrand = () => {
        const params = new URLSearchParams(window.location.search)

        const currentBrand = params.get("brand")

        if (currentBrand === name) {
            params.delete("brand")
        } else {
            params.set("brand", name)
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
                {name} {amount && `(${amount})`}
            </span>
        </button>
    )
}