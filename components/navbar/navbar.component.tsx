"use client"
import Menu from "./menu.component";
import Item from "./item.component";
import Logo from "./logo.component";
import HamburgerMenu from "./hamburger.menu.component";
import { X } from "lucide-react";
import ItemMenu from "./item.detail.menu.component";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
type categoryType = { name?: string, name_en?: string, }

type prop = {
    category: categoryType[]

}

export default function Navbar({ category }: prop) {
    const [hidden, setHidden] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [hamberger, setHamberger] = useState(false);
    const toggleHamberger = () => { setHamberger(!hamberger) }
    const pathname = usePathname()

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setHamberger(false)
    }, [pathname])

    useEffect(() => {
        const body = document.body
        const html = document.documentElement

        if (hamberger) {
            const scrollY = window.scrollY

            body.dataset.scrollY = String(scrollY)

            body.style.position = "fixed"
            body.style.top = `-${scrollY}px`
            body.style.left = "0"
            body.style.right = "0"
            body.style.width = "100%"
            body.style.overflowY = "hidden"

            html.style.overflowY = "hidden"
        } else {
            const scrollY = Number(body.dataset.scrollY || 0)

            body.style.position = ""
            body.style.top = ""
            body.style.left = ""
            body.style.right = ""
            body.style.width = ""
            body.style.overflowY = ""

            html.style.overflowY = ""

            requestAnimationFrame(() => {
                window.scrollTo(0, scrollY)
            })
        }

        return () => {
            body.style.position = ""
            body.style.top = ""
            body.style.left = ""
            body.style.right = ""
            body.style.width = ""
            body.style.overflowY = ""

            html.style.overflowY = ""
        }
    }, [hamberger])
    useEffect(() => {
        const handleScroll = () => {
            const current = window.scrollY
            setHidden(current > lastScrollY)
            setLastScrollY(current)
        }

        window.addEventListener("scroll", handleScroll, {
            passive: true,
        })

        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <nav className={`fixed top-0 left-0 w-screen flex justify-center duration-300 ease-out   ${hamberger || lastScrollY > 0 ? "bg-white" : "bg-transparent"} data-[hidden=true]:-top-full z-50 `} aria-label="main navigation" data-hidden={hidden} data-position={lastScrollY} onClick={toggleHamberger}>
            <div className="flex flex-col lg:flex-row justify-between lg:items-center w-full max-w-7xl lg:px-8 relative ">
                <div className=" touch-none data-[hidden=true]:hidden hidden md:block md:bg-black/50 top-0 left-0  lg:hidden fixed w-screen h-screen z-0" data-hidden={!hamberger} onClick={toggleHamberger} > </div>
                <div className="flex justify-between p-8 text-black">
                    <Logo />
                    <HamburgerMenu onClick={toggleHamberger} />
                </div>
                <Menu isHidden={!hamberger}>
                    <Item pathname="/">หน้าหลัก</Item>
                    <ItemMenu category={category} />
                    <Item pathname="/catalogs">แคตตาล็อค</Item>
                    <Item pathname="/blogs">บทความ</Item>
                    <Item pathname="/about">เกี่ยวกับเรา</Item>
                    <div className=" lg:hidden w-full flex justify-center">
                        <X className="text-gray-4 bg-gray-1 p-1 rounded-xl " size={32} strokeWidth={4} onClick={toggleHamberger} />
                    </div>
                </Menu>
            </div>
        </nav >
    )

};
