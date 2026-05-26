import { ReactNode } from "react";
// type onClick = () => void
export default function Menu({ children }: { children: ReactNode }) {
    return <ul className="   
    h-0 overflow-hidden peer-checked/hamburger:h-screen bg-white lg:bg-transparent peer-checked/hamburger:md:h-screen 
    peer-checked/hamburger:lg:h-fit  md:p-8  z-50 duration-700 transition-all  md:fixed md:top-0 md:right-0 md:w-62.5 
    md:bg-white md:h-screen peer-checked/hamburger:md:-right-62.5 lg:static lg:flex lg:p-4 lg:w-fit lg:h-fit" >{children}</ul>
};
