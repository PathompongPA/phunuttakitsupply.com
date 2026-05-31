import { cva } from "class-variance-authority"
import { ReactNode } from "react"

type prop = {
    children?: ReactNode,
    className?: string
}
const style = cva("p-2 bg-orange text-white rounded-lg font-bold active:scale-90 duration-300 ease-out cursor-pointer w-fit h-fit ")

export default function Button({ children, className }: prop) {
    return <button className={style({ className })}>{children}</button>
};
