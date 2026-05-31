import { cva } from "class-variance-authority"
import { ReactNode } from "react"

type prop = {
    children?: ReactNode,
    className?: string
}
const style = cva(" text-2xl lg:text-[32px] font-bold")
export default function Title({ children, className }: prop) {
    return <h2 className={style({ className })}>{children}</h2>
};
