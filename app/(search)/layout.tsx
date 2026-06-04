import { ReactNode } from "react"

type prop = {
    children: ReactNode
}
export default function Layout({ children }: prop) {
    return (
        <div className=" flex flex-col pt-24 lg:pt-22 items-center w-full overflow-x-hidden">
            {children}
        </div>
    )

};
