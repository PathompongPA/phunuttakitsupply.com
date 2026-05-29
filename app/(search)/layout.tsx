import { Navbar, NavigationBar } from "@/components"
import { ReactNode } from "react"

type prop = {
    children: ReactNode
}
export default function Layout({ children }: prop) {
    return (
        <div className=" flex flex-col w-full pt-20">
            <Navbar />
            <NavigationBar />
            {children}
        </div>
    )

};
