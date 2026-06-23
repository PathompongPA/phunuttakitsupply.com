import Link from "next/link"

type prop = {
    name: string
    isActive: boolean
}

export default function SearchCategoryButton({ name, isActive = false }: prop) {
    const basePath = "/products/"
    const path = name === "ทั้งหมด" ? "/" : name
    const pathname = basePath + path
    return (
        <Link
            href={{ pathname }}
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
        // onClick={() => toggleCategory(name)}
        >
            {name}
        </Link>
    )
}