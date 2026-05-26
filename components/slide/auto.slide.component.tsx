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
    return (
        <div className="flex justify-center items-center w-full h-screen bg-gray-2 ">
            {items[counterNumber]}
        </div>
    )
};
