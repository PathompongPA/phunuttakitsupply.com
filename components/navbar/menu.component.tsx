import { ReactNode } from "react";
type prop = {
    children?: ReactNode,
    isHidden?: boolean
}
export default function Menu({ children, isHidden }: prop) {
    return <ul className="   
        z-50
        ease-out
        p-4
        py-8
        flex flex-col  gap-6 
        lg:flex-row
        h-screen overflow-hidden 
        lg:overflow-visible 
        md:p-8  duration-500 transition-all  md:fixed md:top-0 md:right-0 md:w-62.5 
        md:bg-white md:h-screen 
        bg-white lg:bg-transparent 
        lg:static lg:flex lg:p-4 lg:w-full lg:justify-end lg:h-fit
        data-[hidden=true]:py-0
        data-[hidden=true]:h-0
        data-[hidden=true]:md:h-screen 
        data-[hidden=true]:lg:h-fit  
        data-[hidden=true]:p-4
        data-[hidden=true]:md:-right-62.5 
        touch-none 
        "
        data-hidden={isHidden}
    >
        {children}
    </ul>
};
