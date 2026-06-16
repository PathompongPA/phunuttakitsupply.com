import { ChartNoAxesCombined, CircleCheckBig, Settings, ShieldCheck, VolumeX } from "lucide-react";
import { ReactNode } from "react";
import image from "../../public/image/abb-M2BAX-removebg-preview.png"
import Image from "next/image";
import Link from "next/link";
import * as motion from "motion/react-client"
import { motionVariant } from "@/motion/motion";

const Card = ({ title, subtitle, children, delay = 0 }: { title: string, subtitle: string, children: ReactNode, delay?: number }) =>
    <motion.div
        className=" flex flex-row gap-4 items-center text-inherit"
        variants={motionVariant.fade_up(delay, 50)}
    >
        {children}
        <div className=" flex flex-col">
            <span className=" font-bold text-gray-5 text-[10px] lg:text-[12px]">{title}</span>
            <span className=" text-gray-4  text-[8px] lg:text-[12px]">{subtitle}</span>
        </div>
    </motion.div>

export default function Slide1() {
    const amount = .1
    return (
        <motion.div
            className=" flex w-full justify-center bg-gray-2 relative overflow-hidden select-none p-8 pt-4  md:p-8 lg:py-8 lg:px-16 h-full md:items-center "
            variants={motionVariant.container()}
            initial="hidden"
            whileInView="show"
            viewport={{ amount, once: true }}
        >
            <Link className=" flex flex-col md:flex-row max-w-7xl w-full gap-8 md:gap-8 lg:gap-8 z-10 lg:justify-center md:items-center h-full" href={{ pathname: "/products" }} >
                <div className=" flex flex-col gap-4 lg:gap-8 w-full md:w-fit ">
                    <motion.div
                        className="font-bold flex flex-col gap-2 text-5xl md:text-3xl lg:text-6xl"
                        variants={motionVariant.fade_up(0, 50)}
                    >
                        <span className=" text-orange "> POWER </span>

                        IN MOTION
                    </motion.div>
                    <motion.div
                        className=" flex flex-col"
                        variants={motionVariant.fade_up(0, 50)}
                    >
                        <span className="text-gray-5 font-bold text-[16px] md:text-[10px] lg:text-[16px]">ขับเคลื่อนธุระกิจของคุณด้วย <span className=" text-orange">พลังงานที่เหนือกว่า</span> </span>
                        <span className="text-gray-4 text-[12px] md:text-[8px] lg:text-[12px] ">Drive your business forward with superior power</span>
                    </motion.div>
                    <div className=" grid grid-cols-2 gap-2 lg:flex-col lg:flex lg:gap-4">
                        <Card delay={.3} title="HIGH EFFICIENCY" subtitle="ประสิทธิภาพสูง ประหยัดพลังงาน " >
                            <ChartNoAxesCombined className="text-orange text-2xl" />
                        </Card>
                        <Card delay={.6} title="RELIABLE & DURABLE" subtitle="ทนทาน เชื่อถือได้" >
                            <ShieldCheck className="text-orange" />
                        </Card>
                        <Card delay={.9} title="LOW MAINTENANCE" subtitle="บำรุงรักษาง่าย ลดต้นทุน" >
                            <Settings className="text-orange" />
                        </Card>
                        <Card delay={1.2} title="LOW NOISE OPERATION" subtitle="ทำงานเงียบ ลดเสียงรบกวน" >
                            <VolumeX className="text-orange" />
                        </Card>
                    </div>
                </div>
                <motion.div
                    variants={motionVariant.fade_left(0, 50)}
                    className=" relative h-fit md:max-w-62.5 lg:max-w-100">
                    <Image className=" object-contain" src={image} alt="" />
                    <Image className=" absolute rotate-180 -bottom-full opacity-15 -scale-x-100 object-contain" src={image} alt="" />
                </motion.div>
                <div className=" flex flex-col justify-center items-center *:w-full gap-4 ">
                    <motion.div
                        className=" flex md:flex-col gap-2 flex-wrap "
                        variants={motionVariant.fade_up(0, 50)}
                    >
                        <div className=" font-bold text-[10px] lg:text-2xl text-orange">
                            <span> FULLY </span>
                            <span> CUSTOMIZABLE </span>
                        </div>
                        <span className=" text-gray-4 text-[10px] lg:text-[14px]" >ปรับแต่งได้ตามความต้องการ</span>
                    </motion.div>
                    <div className=" flex  md:flex-col gap-2">
                        <Card delay={.7} title="Power" subtitle="0.37 - 315 kW" >
                            <CircleCheckBig className="text-orange" />
                        </Card>
                        <Card delay={1} title="Voltage" subtitle="220 - 690 V" >
                            <CircleCheckBig className="text-orange" />
                        </Card>
                        <Card delay={1.3} title="Speed" subtitle="750 - 3000 RPM" >
                            <CircleCheckBig className="text-orange" />
                        </Card>
                    </div>
                </div>
            </Link>
        </motion.div>
    )

};
