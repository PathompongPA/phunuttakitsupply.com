import { MotionFade, MotionFadeUp, MotionFadeZoomOut } from "@/motion/motion"
import { Droplets, Shield, TrendingUp, Trophy } from "lucide-react"
import { StaticImport } from "next/dist/shared/lib/get-img-props"
import Image from "next/image"
import { ReactNode } from "react"
import product1 from "../../public/slide/slide5/prop1.png"
import product2 from "../../public/slide/slide5/prop2.png"
import product3 from "../../public/slide/slide5/prop3.png"
import bg from "../../public/slide/slide5/bg.png"
import Link from "next/link"

export default function Slide5() {
    return (
        <div className=" w-full flex justify-center h-screen lg:max-h-192 lg:h-full">
            <Link className="relative  flex flex-col justify-around w-full h-screen lg:h-full pt-16 lg:pt-0 max-w-7xl items-center *:row-span-1  " href={{
                pathname: "/products/", query: {
                    type: "WATER PUMP"
                }
            }}>
                <Title />
                <ListProduct />
                <Property />
            </Link>
            <Background />
        </div >
    )
};

function Title() {
    return (
        <div className=" text-center lg:text-end lg:absolute top-[15%] right-[3%] ">
            <MotionFadeUp className=" text-[38px] md:text-[48px] font-bold">ปั๊มน้ำอุตสาหกรรมคุณภาพสูง </MotionFadeUp>
            <MotionFadeUp delay={.2} className=" text-[20px] md:text-[40px] text-shadow-2xl shadow-white">ขับเคลื่อนทุกระบบอย่างมั่นใจ</MotionFadeUp>
        </div>
    )
}
function Property() {
    return (
        <div className=" grid grid-cols-2 flex-wrap lg:flex-col p-4 gap-2 lg:gap-4  md:p-8 md:px-18 md:gap-4 lg:px-8 backdrop-blur-xl lg:backdrop-blur-none lg:absolute lg:grid-cols-1 lg:top-[45%] lg:right-[3%]">
            <Option delay={.2} label="โซลูชันปั๊มน้ำที่คุ้มค่า เพื่อทุกธุรกิจ"> <Droplets /></Option>
            <Option delay={.3} label="ครบทุกความต้องการด้านปั๊มน้ำอุตสาหกรรม"> <Shield /></Option>
            <Option delay={.4} label="คุณภาพมาตรฐาน พร้อมบริการโดยผู้เชี่ยวชาญ"> <Trophy /> </Option>
            <Option delay={.5} label="เพิ่มประสิทธิภาพการผลิต ลดเวลาหยุดเครื่อง"> <TrendingUp /> </Option>
        </div >
    )
}

function Option({ children, label, delay = 0 }: { label?: string, children: ReactNode, delay?: number }) {
    return (
        <MotionFadeUp delay={delay} className=" flex items-center  text-end justify-end gap-2 md:gap-2 bg-white rounded-4xl md:p-2 lg:p-0 ">

            <span className=" text-gray-4 text-[8px] md:text-[16px] lg:text-[14px] pl-8">{label}</span>
            <div className=" w-fit p-1 md:p-2 rounded-full text-white bg-orange  md:scale-90 scale-50">
                {children}
            </div>
        </MotionFadeUp >
    )
}

function ListProduct() {
    return (
        <div className=" row-span-2 w-[80%] flex flex-row flex-wrap -z-10 *:w-[50%] items-center gap-0 justify-center h-fit md:w-[80%] lg:absolute  lg:w-[50%] lg:left-[5%]  lg:top-1/2 lg:-translate-y-2/5 ">
            <Product delay={.1} src={product1} label="บูสเตอร์ปั๊มและทรานเฟอร์ปั๊ม" subLable="(Booster Pump & Transfer Pump) " />
            <Product delay={.1} src={product2} label="ปั๊มน้ำแบบสปลิทเคส" subLable="(Split Casing Pump)" />
            <Product delay={.1} src={product3} label="ปั๊มต่อยอย" subLable="(Coupling)" />
        </div>
    )
}

function Product({ label, subLable, src, delay = 0 }: { src: StaticImport, label?: string, subLable?: string, delay?: number }) {
    return (
        <MotionFadeZoomOut delay={delay} className=" flex flex-col justify-center items-center w-fit relative h-fit pb-[2vh] gap-[3vh]  lg:pb-[2vw]  lg:gap-[3vw]">
            <div className=" absolute w-[90%] h-full bottom-0 ">
                <div className=" relative w-full h-full *:absolute *:h-[7vh] lg:*:h-[6vw] *:w-full ">
                    <div className=" bottom-[7vh] lg:bottom-[6vw] z-0 rounded-[50%_50%_50%_50%] bg-gray-2"></div>
                    <div className=" bottom-[3.5vh] lg:bottom-[3vw] -z-10 bg-linear-to-r/hsl from-blue-1 to-blue-2 "></div>
                    <div className="shadow-[-10px_12px_32px_-6px_rgba(0,0,0,0.75)]  bottom-[0%] -z-20 rounded-[50%_50%_50%_50%] bg-gray-4 bg-linear-to-r/hsl from-blue-1 to-blue-2  "></div>
                </div>
            </div>
            <div className=" w-[80%]  z-10  relative overflow-hidden rounded-[0%_0%_25%_18%]">
                < Image className=" w-full h-full" src={src} alt="" />
                {/* < Image className=" absolute -bottom-1/2  opacity-50 -z-10 w-full h-full " src={src} alt="" /> */}
            </div>
            <div className=" flex flex-col justify-center items-center">
                <span className=" text-gray-1 text-[8px] md:text-[14px] z-10">{label}</span>
                <span className=" text-gray-1 text-[6px] md:text-[12px] z-10">{subLable}</span>
            </div>
        </MotionFadeZoomOut >
    )

}
function Background() {
    return (
        <MotionFade className=" *:absolute *:top-0 *:left-0 *:w-full *:h-full -z-20 ">
            <Image src={bg} alt="bg-water-pump-slide" className=" object-top " />
            {/* <svg className=" scale-140 w-full h-full opacity-30 lg:opacity-10" xmlns='http://www.w3.org/2000/svg' width='276' height='276' viewBox='0 0 800 800'><rect fill='#FFFFFF' width='800' height='800' /><g fill='none' stroke='#000844' strokeWidth='1.5'><path d='M769 229L1037 260.9M927 880L731 737 520 660 309 538 40 599 295 764 126.5 879.5 40 599-197 493 102 382-31 229 126.5 79.5-69-63' /><path d='M-31 229L237 261 390 382 603 493 308.5 537.5 101.5 381.5M370 905L295 764' /><path d='M520 660L578 842 731 737 840 599 603 493 520 660 295 764 309 538 390 382 539 269 769 229 577.5 41.5 370 105 295 -36 126.5 79.5 237 261 102 382 40 599 -69 737 127 880' /><path d='M520-140L578.5 42.5 731-63M603 493L539 269 237 261 370 105M902 382L539 269M390 382L102 382' /><path d='M-222 42L126.5 79.5 370 105 539 269 577.5 41.5 927 80 769 229 902 382 603 493 731 737M295-36L577.5 41.5M578 842L295 764M40-201L127 80M102 382L-261 269' /></g><g fill='#090955'><circle cx='769' cy='229' r='5' /><circle cx='539' cy='269' r='5' /><circle cx='603' cy='493' r='5' /><circle cx='731' cy='737' r='5' /><circle cx='520' cy='660' r='5' /><circle cx='309' cy='538' r='5' /><circle cx='295' cy='764' r='5' /><circle cx='40' cy='599' r='5' /><circle cx='102' cy='382' r='5' /><circle cx='127' cy='80' r='5' /><circle cx='370' cy='105' r='5' /><circle cx='578' cy='42' r='5' /><circle cx='237' cy='261' r='5' /><circle cx='390' cy='382' r='5' /></g></svg> */}
        </MotionFade>
    )

}