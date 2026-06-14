/* eslint-disable react-hooks/exhaustive-deps */
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
        const handleScroll = () => {
            const current = window.scrollY;
            // eslint-disable-next-line @typescript-eslint/no-unused-expressions
            current > lastScrollY ? setHidden(true) : setHidden(false)
            setLastScrollY(current);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);
    return (
        <nav className={`fixed lg:py-2 top-0 left-0 w-screen flex justify-center duration-600 ease-out ${lastScrollY === 0 ? " bg-white lg:bg-transparent " : "bg-white"}   data-[hidden=true]:-top-full z-50 `} aria-label="main navigation" data-hidden={hidden} data-position={lastScrollY} >
            <div className="flex flex-col lg:flex-row justify-between lg:items-center w-full max-w-7xl lg:px-8 relative ">
                <div className=" touch-none data-[hidden=true]:hidden hidden md:block md:bg-black/50 top-0 left-0  lg:hidden fixed w-screen h-screen z-0" data-hidden={!hamberger} onClick={toggleHamberger} > </div>
                <div className="flex justify-between items-center py-6 px-4 lg:p-4 text-black">
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
