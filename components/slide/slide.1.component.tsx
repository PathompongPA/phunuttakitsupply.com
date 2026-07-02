import { ChartNoAxesCombined, CircleCheckBig, Settings, ShieldCheck, } from "lucide-react";
import { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { MotionFade, MotionFadeUp, MotionFadeZoomOut, } from "@/motion/motion";
import motor from "../../public/slide/motor.png"

export default function Slide1() {
    const basePath = "/slide/motor_logo/"
    const images = ["abb", "siemens", "hascon", "toshiba", "brook", "cmp", "mitsubishi", "weg"]
    const pathImages: string[] = images.map((item) => basePath + item + ".png")
    return (
        <div className="relative h-screen w-full text-black md:pt-30  overflow-hidden" >
            <Background />
            <Link className=" z-30 left-0 top-0 pt-22 gap-0 md:pt-0 p-4 py-8 flex flex-col justify-between  h-full md:h-fit w-full max-w-7xl  " href={{ pathname: "/products" }} >
                <Title />
                <Property />
                <LogoList pathImages={pathImages} />
            </Link>
        </div>
    )

};


const Title = () =>
    <div className=" z-30 text-center flex flex-col justify-center items-center md:justify-start md:items-end gap-8 py-4 md:absolute md:right-[3vw] md:top-22 md:gap-8 lg:gap-4 lg:right-[12vw] "   >
        <div className=" flex flex-col gap-2 md:gap-4 lg:gap-0 ">
            <MotionFadeUp className=" text-[30px] md:text-[38px] lg:text-[40px] md:text-end font-bold text-gray-5"  > ขับเคลื่อนธุรกิจของคุณด้วยพลังที่เหลือกว่า</MotionFadeUp>
            <MotionFadeUp delay={.3} className=" text-[16px] md:text-[20px] lg:text-[16px] md:text-end text-gray-4 px-5 lg:p-0 " > Drive your business forward with superior power </MotionFadeUp>
        </div>
        <MotionFadeUp delay={.6} className=" bg-orange p-4 py-2 w-fit rounded-xl text-white font-bold  text-[22px] md:text-[32px] "  > POWER MOTOR </MotionFadeUp>
    </div >



const Property = () =>
    <div className=" flex  flex-col md:flex-row  relative gap-2 w-full md:h-full md:right-8  md:static md:w-full " >
        <div className=" text-gray-5 right-0 px-4 flex flex-col md:justify-end md:items-end gap-4 md:absolute md:right-8 lg:right-[13vw] md:top-1/2 md:-translate-y-1/6 z-30">
            <MotionFadeUp delay={.5} className=" flex flex-col justify-center md:justify-start text-center md:text-end "  >
                <span className=" text-[8px] md:text-[10px]"> FULLY CUSTOMIZABLE </span>
                <span className=" text-[14px] md:text-[16px] font-bold" >ปรับแต่งได้ตามความต้องการ</span>
            </MotionFadeUp>
            <div className=" flex md:flex-col justify-center gap-4  ">
                <Card delay={.9} title="Power" subtitle="0.37 - 315 kW" >
                    <CircleCheckBig className="text-orange w-4.5" />
                </Card>
                <Card delay={.7} title="Voltage" subtitle="220 - 690 V" >
                    <CircleCheckBig className="text-orange w-4.5" />
                </Card>
                <Card delay={.5} title="Speed" subtitle="750 - 3000 RPM" >
                    <CircleCheckBig className="text-orange w-4.5" />
                </Card>
            </div>
        </div>
        <MotionFadeZoomOut className=" col-span-4 md:col-span-5 md:w-[50vw] lg:w-[30vw] md:absolute md:top-1/2 md:-translate-y-2/5 md:left-1/2 md:-translate-x-1/2"  >
            <Image className="  w-full aspect-square object-cover rotate-y-180" src={motor} alt="" width={0} />
        </MotionFadeZoomOut>
        <Property2 />
    </div>

const Property2 = () =>
    <div className=" backdrop-blur-lg lg:backdrop-blur-none lg:bg-transparent bg-white/75 absolute bottom-0 left-0 flex justify-center gap-4 gap-y-2 py-1 flex-wrap md:top-1/2  md:-translate-y-2/5 lg:-translate-y-2/5 md:flex-col md:left-8 lg:left-[15vw] md:gap-12 ">
        <Card delay={.9} title="LOW MAINTENANCE" subtitle="บำรุงรักษาง่าย ลดต้นทุน" >
            <div className=" p-2 rounded-full scale-75">
                <Settings className="text-orange" />
            </div>
        </Card>
        <Card delay={.6} title="RELIABLE & DURABLE" subtitle="ทนทาน เชื่อถือได้" >
            <div className="  p-2 rounded-full scale-75">
                <ShieldCheck className="text-orange" />
            </div>
        </Card>
        <Card delay={.3} title="HIGH EFFICIENCY" subtitle="ประสิทธิภาพสูง ประหยัดพลังงาน " >
            <div className=" p-2 rounded-full scale-75">
                <ChartNoAxesCombined className="text-orange text-2xl" />
            </div>
        </Card>
    </div>

const LogoList = ({ pathImages }: { pathImages: string[] }) =>
    <div className="px-4 grid grid-cols-4 md:grid-cols-4 lg:grid-cols-8 gap-1 md:gap-4  justify-center  p-2 rounded-lg backdrop-blur-sm md:absolute md:bottom-4 md:left-1/2 md:-translate-x-1/2 md:w-[70vw]"  >

        {pathImages?.map((path, index) =>
            <MotionFadeUp delay={.1 * index} key={path} className="w-full">
                <Image className=" object-cover w-12.5 md:w-25" src={path} alt="" width={0} height={0} unoptimized />
            </MotionFadeUp>
        )}
    </div>

const Card = ({ title, subtitle, children, delay = 0 }: { title: string, subtitle: string, children: ReactNode, delay?: number }) =>
    <MotionFadeUp
        delay={delay}
        className=" text-gray-5 text-[8px] flex items-center gap-1"
    >
        {children}
        <div className=" flex flex-col md:text-[12px] ">
            <span className="">{title}</span>
            <span className="">{subtitle}</span>
        </div>
    </MotionFadeUp>

const Background = () => (
    <MotionFade className="">
        <Pattern className=" absolute left-1/2 -translate-x-1/3 top-22 w-500 opacity-25 rotate-30 " />
        <Pattern className=" absolute left-1/2 -translate-x-1/4 top-22 w-500 opacity-50 rotate-30 " />
        <Pattern className=" absolute left-1/2 -translate-x-1/6 top-22 w-500 opacity-50 rotate-30 " />
        <Pattern className=" absolute left-1/2 -translate-x-1/12 top-22 w-500 opacity-50 rotate-30 " />
        {/* <Pattern className=" absolute left-1/2 -translate-x-1/4 top-22 w-500 rotate-30 " /> */}
        <Pattern className=" absolute -left-6/10 -translate-x-1/14  bottom-8 w-900 opacity-25 rotate-41 -z-2 " />
        <Pattern className=" absolute -left-6/10 -translate-x-1/8  bottom-8 w-900 opacity-25 rotate-38 -z-2 " />
        <Pattern className=" absolute -left-6/10 -translate-x-1/6 bottom-8 w-900 opacity-75 rotate-30  -z-3" />
        <Pattern className=" absolute -left-6/10 -translate-x-1/4 bottom-8 w-900 opacity-100 rotate-30  -z-3" />
    </MotionFade>
)
const Pattern = ({ className }: { className?: string }) => (
    <svg className={className} xmlns='http://www.w3.org/2000/svg' width='1263' height='151.6' viewBox='0 0 1000 120'>
        <rect fill='#FFFFFF' width='2000' height='120' />
        <g fill='none' stroke='#FF8800' strokeWidth='15' strokeOpacity='0.50'>
            <path d='M-500 75c0 0 125-30 250-30S0 75 0 75s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30' />
            <path d='M-500 45c0 0 125-30 250-30S0 45 0 45s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30' />
            <path d='M-500 105c0 0 125-30 250-30S0 105 0 105s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30' />
            <path d='M-500 15c0 0 125-30 250-30S0 15 0 15s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30' />
            <path d='M-500-15c0 0 125-30 250-30S0-15 0-15s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30' />
            <path d='M-500 135c0 0 125-30 250-30S0 135 0 135s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30' />
        </g>
    </svg>
)