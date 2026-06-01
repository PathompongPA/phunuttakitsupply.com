import { NavigationBar } from "@/components"
import { ReactNode } from "react"

type prop = {
    children: ReactNode
}
export default function Layout({ children }: prop) {
    return (
        <div className=" flex flex-col w-full pt-24 lg:pt-22 items-center">
            <NavigationBar />
            {children}
        </div>
    )

};
