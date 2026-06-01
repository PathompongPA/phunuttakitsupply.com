import { Blog } from "@/components"
import { ReactNode } from "react"

type prop = {
    children: ReactNode
}
export default function Layout({ children }: prop) {
    return (
        <div className="">
            {children}
            <Blog />
        </div>
    )
};
