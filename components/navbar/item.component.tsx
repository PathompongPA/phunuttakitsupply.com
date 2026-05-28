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

const style = cva("text-end  px-8 gap-1 flex flex-col lg:items-end text-nowrap group/item ", {
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
            <div className="flex justify-end items-center gap-2 ">
                <Link
                    className=""
                    href={{ pathname, hash, query }}
                    scroll={true}
                >
                    {children}
                </Link>
                {dropdown &&
                    <label className=" ease-in-out flex h-fit w-fit *:w-fit *:h-fit *:p-0 hover:cursor-pointer hover:rotate-180 group-hover/item:lg:rotate-180  duration-700 " htmlFor="category">
                        <ChevronDown className="" size={16} strokeWidth={4} />
                    </label>
                }
            </div>
            <div className="border-b-4 rounded-lg w-full ease-out border-transparent scale-0  origin-left group-hover/item:scale-100 
            group-hover/item:lg:border-orange duration-500"></div>
        </li>
    )

};
