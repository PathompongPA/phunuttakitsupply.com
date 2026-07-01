"use client"
import Image from "next/image";
import image from "../../public/image/LINE_20260531_231800.png"
import Button from "../material/button.component";
import Title from "../material/title.component";
import { motion } from "framer-motion";
import { motionVariant } from "@/motion/motion";
export default function About() {
    return (
        <motion.div
            className=" relative overflow-hidden w-full flex justify-center "
            variants={motionVariant.container()}
            initial="hidden"
            whileInView="show"
            viewport={{ amount: .2, once: true }}
        >
            <div className=" grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl md:gap-4 lg:gap-8 p-8 py-8 lg:p-16 lg:px-8 ">
                <motion.div variants={motionVariant.fade_left(0, 200)}>
                    <Image className=" rounded-2xl z-10 " src={image} alt="" />
                </motion.div>
                <div className=" flex flex-col justify-center items-end gap-8 z-10 " >
                    <motion.div variants={motionVariant.fade_up(.2, 20)}>
                        <Title>ขับเคลื่อนทุกโรงงานไปกับอะไหล่ที่พร้อมใช้งาน</Title>
                    </motion.div>
                    <motion.p
                        className=" text-gray-3 text-wrap text-[16px]"
                        variants={motionVariant.fade_up(.4, 20)}
                    >
                        <span className=" text-orange w-full font-bold "> ภูณัฐกิจ ซัพพลายส์ จำกัด </span>
                        <span className="text-[16px]">
                            มุ่งมั่นสู่การเป็นผู้นำด้านการจัดจำหน่ายอะไหล่อุตสาหกรรมชิ้นส่วนเครื่องจักรและอุปกรณ์สำหรับโรงงานอุตสาหกรรม
                        </span>
                    </motion.p>
                    <motion.div variants={motionVariant.scale_up(.5)}>
                        <Button pathname="/about">เกี่ยวกับเรา</Button>
                    </motion.div>
                </div>
            </div>
            <motion.div
                variants={motionVariant.fade_down(0, 200)}
                className="absolute -left-1/3 -top-1/2 h-1/2 w-[120%] -rotate-20 bg-orange z-0"
            />

            <motion.div
                variants={motionVariant.fade_up(0, 200)}
                className="absolute -right-1/3 -bottom-1/2 h-1/2 w-[120%] -rotate-20 bg-orange z-0"
            />
        </motion.div >
    )
};
