"use client"
import { Search } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function SearchKeyword() {
    const router = useRouter();
    const pathname = usePathname()
    const searchParams = useSearchParams()
    const search = searchParams.get("search") || ""
    const [value, setValue] = useState("");

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setValue(search)
    }, [search])

    const onSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const params = new URLSearchParams(searchParams)

        if (!value.trim()) {
            params.delete("search")
        } else {
            params.set("search", value)
        }
        const query = params.toString()
        router.push(
            query
                ? `${pathname}?${query}`
                : pathname
        )

    };
    return (
        <form className=" flex flex-row w-fit bg-white rounded-lg" onSubmit={onSubmit} >
            <input className=" px-2 w-fit text-gray-4 max-w-30" type="text"
                placeholder="ค้นหา"
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
            <button className=" border-white border-3 w-8 aspect-square flex justify-center items-center rounded-lg bg-orange" type="submit">
                <Search className="text-white" width={16} strokeWidth={3} />
            </button>
        </form>
    )
};
