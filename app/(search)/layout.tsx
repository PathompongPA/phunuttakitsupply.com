import { ReactNode } from "react"

type prop = {
    children: ReactNode
}
export default function Layout({ children }: prop) {
    return (
        <div className=" flex flex-col pt-22 lg:pt-21 items-center w-full ">
            {children}
        </div>
    )

};
