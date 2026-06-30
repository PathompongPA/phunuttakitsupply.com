import { ChartNoAxesCombined, CircleCheckBig, Settings, ShieldCheck, } from "lucide-react";
import { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import * as motion from "motion/react-client"
import { motionVariant } from "@/motion/motion";
import bg1 from "../../public/slide/bg1.png"
import motor from "../../public/slide/motor.png"

export default function Slide1() {
    const basePath = "/slide/motor_logo/"
    const images = ["abb", "siemens", "hascon", "toshiba", "brook", "cmp", "mitsubishi", "weg"]
    const pathImages: string[] = images.map((item) => basePath + item + ".png")
    const amount = .1
    return (
        <motion.div
            className="relative h-fit min-h-screen w-full text-black md:pt-30 "
            variants={motionVariant.container()}
            initial="hidden"
            whileInView="show"
            viewport={{ amount, once: true }}
        >
            <Background />
            <Link className=" z-30 left-0 top-0 pt-22 gap-0 md:pt-0 p-4 py-8 flex flex-col justify-between  h-full md:h-fit w-full max-w-7xl  " href={{ pathname: "/products" }} >
                <Title />
                <Property />
                <LogoList pathImages={pathImages} />
            </Link>
        </motion.div>
    )

};

const Background = () =>
    <div className=" w-full h-full *:absolute *:top-0 *:left-0 *:w-full *:h-full ">
        {/* <Image className=" w-full h-full object-cover" src={bg1} width={0} height={0} alt="" unoptimized /> */}
        {bg1 && <div className="bg-gray-2"></div>}
    </div>

const Title = () =>
    <div className=" z-30 text-center flex flex-col justify-center items-center md:justify-start md:items-end gap-8 py-4 md:absolute md:right-[3vw] md:top-22 md:gap-8 lg:gap-4 lg:right-[10vw] "   >
        <div className=" flex flex-col gap-2 md:gap-4 lg:gap-0 ">
            <motion.span className=" text-[30px] md:text-[38px] lg:text-[44px] md:text-end font-bold text-gray-5" variants={motionVariant.fade_up(.3, 100)} > ขับเคลื่อนธุรกิจของคุณด้วยพลังที่เหลือกว่า</motion.span>
            <motion.span className=" text-[16px] md:text-[20px] lg:text-[20px] md:text-end text-gray-4 px-4 " variants={motionVariant.fade_up(.5, 100)}> Drive your business forward with superior power </motion.span>
        </div>
        <motion.div className=" bg-orange p-4 py-2 w-fit rounded-xl text-white font-bold  text-[22px] md:text-[32px] " variants={motionVariant.fade_up(.8, 100)} > POWER MOTOR </motion.div>
    </div>



const Property = () =>
    <motion.div
        className=" flex  flex-col md:flex-row  relative gap-2 w-full md:h-full md:right-8  md:static md:w-full "
        variants={motionVariant.scale_up(0)}
    >
        <div className=" text-gray-5 right-0 px-4 flex flex-col md:justify-end md:items-end gap-4 md:absolute md:right-8 lg:right-[12vw] md:top-1/2 md:-translate-y-1/6 z-30">
            <motion.div className=" flex flex-col justify-center md:justify-start text-center md:text-end " variants={motionVariant.fade_up(1, 50)} >
                <span className=" text-[8px] md:text-[10px]"> FULLY CUSTOMIZABLE </span>
                <span className=" text-[14px] md:text-[16px] font-bold" >ปรับแต่งได้ตามความต้องการ</span>
            </motion.div>
            <div className=" flex md:flex-col justify-center gap-4  ">
                <Card delay={.7} title="Power" subtitle="0.37 - 315 kW" >
                    <CircleCheckBig className="text-orange w-4.5" />
                </Card>
                <Card delay={1} title="Voltage" subtitle="220 - 690 V" >
                    <CircleCheckBig className="text-orange w-4.5" />
                </Card>
                <Card delay={1.3} title="Speed" subtitle="750 - 3000 RPM" >
                    <CircleCheckBig className="text-orange w-4.5" />
                </Card>
            </div>
        </div>
        <motion.div className=" col-span-4 md:col-span-5 md:w-[50vw] lg:w-[35vw] md:absolute md:top-1/2 md:-translate-y-2/5 md:left-1/2 md:-translate-x-1/2" variants={motionVariant.fade_left(0, 100)} >
            <Image className=" w-full aspect-square object-cover rotate-y-180" src={motor} alt="" width={0} />
        </motion.div>
        <Property2 />
    </motion.div>

const Property2 = () =>
    <motion.div className=" absolute bottom-0 left-0 flex justify-center gap-4 gap-y-2 py-4 flex-wrap md:top-1/2  md:-translate-y-2/5 lg:-translate-y-2/5 md:flex-col md:left-8 lg:left-[15vw] md:gap-16 ">
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
    </motion.div>

const LogoList = ({ pathImages }: { pathImages: string[] }) =>
    <div className="px-4 grid grid-cols-4 md:grid-cols-4 lg:grid-cols-8 gap-1 md:gap-4  justify-center  p-2 rounded-lg backdrop-blur-sm md:absolute md:bottom-4 md:left-1/2 md:-translate-x-1/2 md:w-[80vw]"  >

        {pathImages?.map((path, index) =>
            <motion.div key={path} variants={motionVariant.fade_up(.2 * index, 50)} className="w-full">
                <Image className=" object-cover w-12.5 md:w-25" src={path} alt="" width={0} height={0} unoptimized />
            </motion.div>
        )}
    </div>

const Card = ({ title, subtitle, children, delay = 0 }: { title: string, subtitle: string, children: ReactNode, delay?: number }) =>
    <motion.div
        className=" text-gray-4 text-[8px] flex items-center gap-1"
        variants={motionVariant.fade_up(delay, 50)}
    >
        {children}
        <div className=" flex flex-col md:text-[14px] ">
            <span className="">{title}</span>
            <span className="">{subtitle}</span>
        </div>
    </motion.div>