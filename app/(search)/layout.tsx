import { Navbar, NavigationBar } from "@/components"
import { ReactNode } from "react"

type prop = {
    children: ReactNode
}
export default function Layout({ children }: prop) {
    return (
        <div className=" w-full pt-24">
            <Navbar />
            <NavigationBar />
            {children}
        </div>
    )

};
