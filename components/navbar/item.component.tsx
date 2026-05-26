import { cva, VariantProps } from "class-variance-authority";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";
type prop = {
    children?: ReactNode,
    pathname?: string,
    hash?: string,
    query?: string
    className?: string,
    dropdown?: boolean
} & VariantProps<typeof style>;

const style = cva("text-end p-4 px-8  flex flex-col justify-end items-end  lg:items-center text-nowrap group ", {
    variants: {
        variant: {
            primary: "text-[14px] font-semibold text-gray-4",
            secondary: "text-[12px] font-normal text-gray-4"
        }
    }, defaultVariants: {
        variant: "primary"
    }
})

export default async function Item({ children, dropdown = false, className, pathname, hash, query, variant }: prop) {
    return (
        <li className={style({ variant, className })}>
            <div className="flex items-center">
                <Link
                    className=""
                    href={{ pathname, hash, query }}
                    scroll={true}
                >
                    {children}
                </Link>
                {dropdown &&
                    <label className=" flex h-fit w-fit *:w-fit *:h-fit *:p-0 hover:cursor-pointer" htmlFor="category">
                        <ChevronDown className="" size={16} strokeWidth={4} />
                    </label>
                }
            </div>
            <div className="border-b-4 w-full ease-in-out border-transparent scale-0  origin-left group-hover:scale-100 group-hover:border-orange duration-500"></div>
        </li>
    )

};
