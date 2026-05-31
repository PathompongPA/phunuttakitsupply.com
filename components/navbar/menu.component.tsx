import { ReactNode } from "react";
// type onClick = () => void
export default function Menu({ children }: { children: ReactNode }) {
    return <ul className="   
     ease-out
     px-4
    flex flex-col  gap-8
    lg:flex-row
    h-0 overflow-hidden lg:overflow-visible peer-checked/hamburger:py-2 peer-checked/hamburger:h-screen bg-white lg:bg-transparent peer-checked/hamburger:md:h-screen 
    peer-checked/hamburger:lg:h-fit  md:p-8  z-50 duration-700 transition-all  md:fixed md:top-0 md:right-0 md:w-62.5 
    peer-checked/hamburger:p-4
    md:bg-white md:h-screen peer-checked/hamburger:md:-right-62.5 lg:static lg:flex lg:p-4 lg:w-full lg:justify-end lg:h-fit" >{children}</ul>
};
