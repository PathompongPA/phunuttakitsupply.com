"use client"
import { ReactNode, useEffect, useState } from "react";

type prop = {
    children?: ReactNode,
    interval?: number
}
export default function AutoSlide({ children, interval = 5000 }: prop) {
    const [counterNumber, setCounterNumber] = useState(0);
    const items = Array.isArray(children) ? children : [children];

    useEffect(() => {
        const timer = setInterval(() => {
            setCounterNumber((prev) => (prev + 1) % items.length);
        }, interval);
        return () => clearInterval(timer);
    }, [items.length, interval]);

    const count = items.map((item, _index) => {
        return (
            <div className="py-2 hover:cursor-pointer group  " key={_index} onClick={() => { setCounterNumber(_index) }}>
                <div className={` overflow-hidden group-hover:scale-y-150 group-hover:rounded-full rounded-2xl h-2 duration-300 group-hover:duration-300 group-hover:border-gray-300 ${counterNumber === _index ? " bg-gray-1" : " bg-orange"}`}  >
                    <div className={` bg-orange ease-out  opacity-0 h-full w-5 duration-300 ${counterNumber === _index && "animate-loading w-15"} origin-left `}  ></div>
                </div>
            </div>
        )
    })

    return (
        <div className="flex justify-center w-full  pt-22 lg:pt-20 h-fit md:h-[50vh] md:items-center  lg:h-screen  relative bg-gray-2">
            {items[counterNumber]}
            <div className=" flex flex-row gap-2 justify-center p-8 absolute bottom-1/5  md:bottom-0 lg:bottom-8 left-1/2 -translate-x-1/2 z-30 ">
                {count}
            </div>
        </div>
    )
};
