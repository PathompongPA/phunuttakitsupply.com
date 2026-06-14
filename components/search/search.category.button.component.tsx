"use client"
import { useRouter, useSearchParams } from "next/navigation"

type prop = {
    name: string
}

export default function SearchCategoryButton({ name }: prop) {
    const router = useRouter()
    const searchParams = useSearchParams()

    const categories = searchParams.getAll("category")
    const isActive = categories.includes(name)

    const toggleCategory = (value: string) => {
        const params = new URLSearchParams(searchParams)
        const categories = params.getAll("category")
        const exists = categories.includes(value)

        params.delete("category")

        if (exists) {
            const filtered = categories.filter((item) => item !== value)

            filtered.forEach((item) => {
                params.append("category", item)
            })
        } else {
            categories.forEach((item) => {
                params.append("category", item)
            })

            params.append("category", value)
        }

        router.push(`/products?${params.toString()}`)
    }

    return (
        <button
            className={`
                 cursor-pointer
                active:scale-90
                text-nowrap
                min-w-fit
                ease-out
                duration-300
                text-[12px]
                lg:px-4
                p-2
                rounded-3xl
                font-semibold
                md:text-xs
                ${isActive
                    ? "bg-orange text-white"
                    : "bg-gray-1 text-gray-5"}
            `}
            onClick={() => toggleCategory(name)}
        >
            {name}
        </button>
    )
}