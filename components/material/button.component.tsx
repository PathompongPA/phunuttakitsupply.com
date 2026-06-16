import { cva } from "class-variance-authority"
import Link from "next/link"
import { ReactNode } from "react"
type query = {
    category?: string
    type?: string
    brand?: string
}
type prop = {
    children?: ReactNode,
    className?: string,
    pathname?: string,
    query?: query
}
const style = cva("p-3 bg-orange text-white rounded-3xl active:scale-80   hover:shadow-lg/50 shadow-gray-4 hover:scale-95 active:md:scale-75 duration-300 ease-out cursor-pointer w-fit h-fit text-[12px] md:text-[10px] lg:text-[14px] font-semibold")

export default function Button({ children, className, pathname, query }: prop) {
    return <Link className={style({ className })} href={{ pathname, query }}>{children}</Link>
};
