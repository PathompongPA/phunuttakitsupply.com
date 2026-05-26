import { ReactNode } from "react"

type prop = {
    children: ReactNode
}

export default async function Detail({ children }: prop) {
    return (
        <div className="peer-checked/category:max-h-0
     overflow-hidden
      lg:bg-white
         lg:absolute
         lg:right-0
        max-h-[500px]
        ease-in-out 
        flex flex-col 
        *:p-2 *:px-8  duration-700 ">
            {children}
        </div>
    )
};
