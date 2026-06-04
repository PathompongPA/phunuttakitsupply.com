"use client"
import { cva, VariantProps } from "class-variance-authority";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";
type query = {
    category?: string,
}
type func = () => void

type prop = {
    onClick?: func
    children?: ReactNode,
    pathname?: string,
    hash?: string,
    query?: query
    className?: string,
    dropdown?: boolean
} & VariantProps<typeof style>;

const style = cva("text-end h-fit font-semibold gap-1 flex flex-col lg:items-end text-nowrap group/item  cursor-pointer", {
    variants: {
        variant: {
            primary: "text-[14px] font-semibold text-gray-4",
            secondary: "text-[12px] font-normal text-gray-4"
        }
    }, defaultVariants: {
        variant: "primary"
    }
})

export default function Item({ children, dropdown = false, className, pathname, hash, query, variant, onClick }: prop) {
    const path = usePathname()
    return (
        <li className={style({ variant, className })}>
            <div className="flex justify-end items-center gap-2 px-1">
                <Link
                    className=""
                    href={{ pathname, hash, query }}
                    scroll={true}
                >
                    {children}
                </Link>
                {dropdown &&
                    <label
                        className=" ease-in-out flex h-fit w-fit *:w-fit *:h-fit *:p-0 hover:rotate-180 group-hover:lg:rotate-180  duration-700 "
                        htmlFor="category"
                        onClick={(e) => { e.stopPropagation(); onClick(); }}
                    >
                        <ChevronDown className="" size={16} strokeWidth={4} />
                    </label>
                }
            </div>
            <div className={`border-b-4 rounded-lg w-full ease-in-out border-transparent origin-bottom-left group-hover/item:scale-100  ${!query?.category && path === pathname ? "scale-100 lg:border-orange" : "scale-0"}
            group-hover/item:border-orange duration-300`}></div>
        </li>
    )

};
