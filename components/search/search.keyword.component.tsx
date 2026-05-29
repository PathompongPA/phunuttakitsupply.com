"use client"
import { Search } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SearchKeyword() {
    const router = useRouter();
    const [value, setValue] = useState("");

    const onSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (!value.trim()) return;

        router.push(`/search?q=${encodeURIComponent(value)}`);
    };
    return (
        <form className=" flex flex-row gap-1 p-1 bg-white rounded-lg" onSubmit={onSubmit} >
            <input className=" px-2 w-fit min-w-20 text-gray-4 max-w-25" type="text" placeholder="ค้นหาสินค้า" name="" id=""
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
            <button className=" w-8 aspect-square flex justify-center items-center rounded-lg bg-orange" type="submit">
                <Search className="text-white" width={16} />
            </button>
        </form>
    )
};
