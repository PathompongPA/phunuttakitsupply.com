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
const style = cva("p-2 bg-orange text-white rounded-lg active:scale-90 duration-300 ease-out cursor-pointer w-fit h-fit text-[10px] lg:text-base font-semibold ")

export default function Button({ children, className, pathname, query }: prop) {
    return <Link className={style({ className })} href={{ pathname, query }}>{children}</Link>
};
