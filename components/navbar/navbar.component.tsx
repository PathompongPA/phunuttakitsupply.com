import Menu from "./menu.component";
import Item from "./item.component";
import Logo from "./logo.component";
import HamburgerMenu from "./hamburger.menu.component";
import { X } from "lucide-react";
import ItemMenu from "./item.detail.menu.component";

export default async function Navbar() {
    return (
        <nav className="fixed top-0 left-0 w-full flex justify-center lg:bg-gray-1 z-50" aria-label="main navigation">
            <div className="flex flex-col lg:flex-row justify-between lg:items-center w-full max-w-7xl lg:px-8 relative ">
                <input type="checkbox" className="peer/hamburger" id="hamburger" hidden />
                <label className="peer-checked/hamburger:hidden hidden md:block md:bg-black/50  lg:hidden fixed w-screen h-screen z-0" htmlFor="hamburger"  > </label>
                <div className="flex justify-between p-8 text-black bg-gray-1">
                    <Logo />
                    <HamburgerMenu />
                </div>
                <Menu>
                    <Item pathname="/">หน้าหลัก</Item>
                    <ItemMenu />
                    <Item pathname="/catalogs">แคตตาล็อค</Item>
                    <Item pathname="/blogs">บทความ</Item>
                    <Item pathname="/blogs">เกี่ยวกับเรา</Item>
                    <label className="w-full flex justify-center p-8 lg:hidden" htmlFor="hamburger">
                        <X className="text-gray-4 bg-gray-1 p-1 rounded-xl" size={32} strokeWidth={4} />
                    </label>
                </Menu>
            </div>
        </nav >
    )

};
