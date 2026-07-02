import { MotionFadeUp, MotionFadeZoomOut } from "@/motion/motion"
import { Droplets, Shield, TrendingUp, Trophy } from "lucide-react"
import { StaticImport } from "next/dist/shared/lib/get-img-props"
import Image from "next/image"
import { ReactNode } from "react"
import product1 from "../../public/slide/slide5/prop1.png"
import product2 from "../../public/slide/slide5/prop2.png"
import product3 from "../../public/slide/slide5/prop3.png"

export default function Slide5() {
    return (
        <div className=" grid grid-cols-1 lg:grid-cols-2 h-screen pt-22 lg:pt-0 max-w-7xl justify-center items-center *:row-span-1">
            <ListProduct />
            <div className="flex flex-col gap-8 p-4 justify-between lg:justify-center h-full ">
                <Title />
                <Property />
            </div>
        </div>
    )
};

function Title() {
    return (
        <div className=" text-center lg:text-end">
            <MotionFadeUp className=" text-[36px] md:text-[48px] font-bold">ปั๊มน้ำอุตสาหกรรมคุณภาพสูง </MotionFadeUp>
            <MotionFadeUp delay={.2} className=" text-[20px] md:text-[40px]">ขับเคลื่อนทุกระบบอย่างมั่นใจ</MotionFadeUp>
        </div>
    )
}
function Property() {
    return (
        <div className=" flex flex-col p-4 lg:gap-2 px-8 md:p-8 md:px-18 md:gap-4 lg:px-8 backdrop-blur-xl lg:backdrop-blur-none">
            <Option delay={.2} label="โซลูชันปั๊มน้ำที่คุ้มค่า เพื่อทุกธุรกิจ"> <Droplets /></Option>
            <Option delay={.3} label="ครบทุกความต้องการด้านปั๊มน้ำอุตสาหกรรม"> <Shield /></Option>
            <Option delay={.4} label="คุณภาพมาตรฐาน พร้อมบริการโดยผู้เชี่ยวชาญ"> <Trophy /> </Option>
            <Option delay={.5} label="เพิ่มประสิทธิภาพการผลิต ลดเวลาหยุดเครื่อง"> <TrendingUp /> </Option>
        </div >
    )
}

function Option({ children, label, delay = 0 }: { label?: string, children: ReactNode, delay?: number }) {
    return (
        <MotionFadeUp delay={delay} className=" flex items-center  text-end justify-end gap-4 ">
            <span className=" text-gray-4 text-[12px] md:text-[18px] lg:text-[14px]">{label}</span>
            <div className=" w-fit p-2 rounded-full text-white bg-orange scale-75 lg:scale-90">
                {children}
            </div>
        </MotionFadeUp >
    )
}

function ListProduct() {
    return (
        <div className=" row-span-2 absolute top-1/2 -translate-1/2 left-1/2 md:-translate-y-3/5  lg:translate-0 lg:static flex flex-row flex-wrap w-full -z-10 *:w-[50%] items-center pt-22 gap-0 justify-center h-fit ">
            <Product delay={.1} src={product1} label="ระบบปั้ม" />
            <Product delay={.1} src={product2} label="วาล์ว" />
            <Product delay={.1} src={product3} label="ปั้ม" />
        </div>
    )
}

function Product({ label, src, delay = 0 }: { src: StaticImport, label?: string, delay?: number }) {
    return (
        <MotionFadeZoomOut delay={delay} className=" flex flex-col justify-center items-center w-fit h-fit ">
            < Image className=" w-75 md:w-87.5 lg:w-[80%]" src={src} alt="" />
            <span className=" text-gray-4 text-[10px] md:text-[14px]">{label}</span>
        </MotionFadeZoomOut >
    )

}