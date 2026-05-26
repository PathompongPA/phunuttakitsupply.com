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

const style = cva("text-end p-4 px-8  flex justify-end items-center ", {
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
            <Link
                className=""
                href={{ pathname, hash, query }}
                scroll={true}
            >
                {children}
            </Link>
            {dropdown &&
                <label className=" flex h-fit w-fit *:w-fit *:h-fit *:p-0 " htmlFor="category">
                    <ChevronDown size={16} strokeWidth={4} />
                </label>
            }
        </li>
    )

};
