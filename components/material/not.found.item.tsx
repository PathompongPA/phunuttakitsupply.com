"use client"

import {
    usePathname,
    useRouter,
    useSearchParams,
} from "next/navigation"

export default function NotFoundItem() {
    const router = useRouter()
    const pathname = usePathname()
    const searchParams = useSearchParams()

    const clearQuery = () => {
        const params = new URLSearchParams(searchParams.toString())

        params.delete("search")

        const query = params.toString()

        router.replace(query ? `${pathname}?${query}` : pathname)
    }

    return (
        <div className=" col-span-full flex justify-center items-center h-full gap-6 flex-col p-4 md:p-16 ">
            <span className=" text-gray-4">

                {`ไม่พบ '${searchParams.get("search")}' ในการค้นหา`}
            </span>

            <button className=" underline cursor-pointer text-gray-5 font-semibold " onClick={clearQuery}>
                ล้างการค้นหา
            </button>
        </div>
    )
}