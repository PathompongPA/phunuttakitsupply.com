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
        <div className="h-screen lg:h-full lg:max-h-192 w-full text-black   overflow-hidden flex justify-center items-center" >
            <div className="relative  max-w-7xl w-full h-full md:pt-[20%]">
                <Background />
                <Link className=" z-30 left-0 top-0 pt-22 gap-0 md:pt-0 p-4 py-8 flex flex-col justify-around  items-center  h-full  w-full max-w-7xl  " href={{ pathname: "/products" }} >
                    <Title />
                    <div className=" grid grid-cols-12 items-center justify-around *:place-items-center ">
                        <ImageMotor />
                        <Property />
                    </div>
                    <div className=" flex flex-col md:gap-4">
                        <Property2 />
                        <LogoList pathImages={pathImages} />
                    </div>
                </Link>
            </div>
        </div>
    )

};


const Title = () =>
    <div className=" z-30 text-center flex flex-col justify-center items-center lg:justify-start lg:items-end gap-4 lg:absolute lg:right-[5%] lg:top-[15%] lg:gap-4  "   >
        <div className=" flex flex-col gap-1 lg:gap-0 ">
            <MotionFadeUp className=" text-[30px] md:text-[38px] lg:text-[40px] lg:text-end font-bold text-gray-5"  > ขับเคลื่อนธุรกิจของคุณด้วยพลังที่เหลือกว่า</MotionFadeUp>
            <MotionFadeUp delay={.3} className=" text-[12px] md:text-[20px] lg:text-[16px] lg:text-end text-gray-4 px-5 lg:p-0 " > Drive your business forward with superior power </MotionFadeUp>
        </div>
        <MotionFadeUp delay={.6} className=" bg-orange p-4 py-2 w-fit rounded-xl text-white font-bold  text-[22px] md:text-[32px] "  > POWER MOTOR </MotionFadeUp>
    </div >



const Property = () =>
    <div className=" col-span-4 md:col-span-5 flex  flex-col w-fit h-full justify-center lg:flex-row  relative gap-2 lg:h-full lg:right-8  lg:static lg:w-full " >
        <div className=" w-fit h-full text-gray-5 gap-2 right-0 px-4 flex flex-col justify-around md:justify-center md:gap-8 lg:gap-4 lg:absolute lg:h-fit  lg:right-[7%] lg:top-1/2 lg:-translate-y-1/6 z-30">
            <MotionFadeUp delay={.5} className=" flex flex-col justify-center lg:justify-start text-end "  >
                <span className=" text-[14px] md:text-[16px] font-bold" >ปรับแต่งได้ตามความต้องการ</span>
                <span className=" text-[8px] md:text-[10px]"> FULLY CUSTOMIZABLE </span>
            </MotionFadeUp>
            <div className=" flex flex-col justify-end items-end gap-2 md:gap-4  ">
                <Card delay={.9} title="Power" subtitle="0.37 - 315 kW" >
                    <CircleCheckBig className="text-orange scale-75 " />
                </Card>
                <Card delay={.7} title="Voltage" subtitle="220 - 690 V" >
                    <CircleCheckBig className="text-orange scale-75 " />
                </Card>
                <Card delay={.5} title="Speed" subtitle="750 - 3000 RPM" >
                    <CircleCheckBig className="text-orange scale-75 " />
                </Card>
            </div>
        </div>
    </div>

const ImageMotor = () =>
    <MotionFadeZoomOut className=" col-span-8 md:col-span-7  lg:w-[35%] lg:absolute lg:top-1/2 lg:-translate-y-2/5 lg:left-1/2 lg:-translate-x-1/2 overflow-visible "  >
        <Image className=" scale-120 lg:scale-135 w-full h-full  object-cover rotate-y-180" src={motor} alt="" width={0} />
    </MotionFadeZoomOut>

const Property2 = () =>
    <div className=" lg:backdrop-blur-none lg:scale-100 lg:bg-transparent gap-8  gap-y-0 flex justify-around py-1 flex-wrap lg:absolute lg:top-[40%] lg:flex-col lg:left-[5%] lg:gap-12 ">
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
    <MotionFadeUp delay={.3} className="w-full  *:place-items-center px-4 gap-4 gap-y-2 grid grid-cols-4  lg:grid-cols-8 md:gap-4  justify-center  p-2 rounded-lg backdrop-blur-sm lg:absolute lg:bottom-[2%] lg:left-1/2 lg:-translate-x-1/2 lg:w-[80%]">
        {pathImages?.map((path) =>
            <Image className=" object-cover w-12.5 md:w-25" src={path} alt="" width={0} height={0} unoptimized key={path} />
        )}
    </MotionFadeUp>

const Card = ({ title, subtitle, children, delay = 0 }: { title: string, subtitle: string, children: ReactNode, delay?: number }) =>
    <MotionFadeUp
        delay={delay}
        className=" text-gray-5 text-[10px] flex items-center gap-1"
    >
        {children}
        <div className=" flex flex-col md:text-[12px] text-nowrap ">
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