import { ReactNode } from "react"

type prop = {
    children: ReactNode,
    isOpen: boolean
}

export default function Detail({ children, isOpen }: prop) {
    return (
        <div className={`
        ease-in-out
        duration-700
        overflow-hidden
        max-h-0
         rounded-lg
        border-gray-2
        ${isOpen && "max-h-125 lg:max-h-0 lg:p-0 "}
            group-hover:border group-hover:border-gray-2
        lg:group-hover:max-h-125
        lg:group-hover:lg:p-4
      lg:bg-white
        lg:absolute
        lg:right-0
        lg:top-10
        lg:origin-top
        lg:px-4
        flex flex-col 
        *:lg:p-2
        *:py-1  
        `}
        >
            {children}
        </div>
    )
};
