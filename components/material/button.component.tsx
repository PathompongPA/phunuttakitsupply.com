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
    _blank?: boolean
}
const style = cva([
    "duration-300 ease-in-out cursor-pointer w-fit h-fit ",
    "p-3 bg-orange text-white rounded-3xl ",
    "hover:shadow-lg/50 shadow-gray-4",
    " active:scale-75 ",
    "hover:scale-110",
    "text-[12px] md:text-[10px] lg:text-[14px] font-semibold"
])

export default function Button({ children, className, pathname, query, _blank = false }: prop) {
    const target = _blank ? "_blank" : "_self"
    return (
        <Link href={{ pathname, query }} target={target}>
            <button className={style({ className })} >{children}</button>
        </Link>
    )
};
