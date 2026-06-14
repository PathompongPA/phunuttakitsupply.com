import { cva } from "class-variance-authority"
import { ReactNode } from "react"

type prop = {
    children?: ReactNode,
    className?: string
}
const style = cva("")
export default function Title({ children, className }: prop) {
    return <h1 className={style({ className })}>{children}</h1>
};
