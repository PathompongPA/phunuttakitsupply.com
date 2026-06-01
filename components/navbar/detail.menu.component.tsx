import { ReactNode } from "react"

type prop = {
    children: ReactNode
}

export default function Detail({ children }: prop) {
    return (
        <div className="
        ease-out
        duration-700
        overflow-hidden
        max-h-0
        peer-checked/category:max-h-125
        lg:group-hover:max-h-125
      lg:bg-white
        lg:absolute
        lg:right-0
        flex flex-col 
        *:p-2 *:px-8  
        "
        >
            {children}
        </div>
    )
};
