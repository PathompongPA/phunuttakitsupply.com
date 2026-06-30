import Image from "next/image";
import img1 from "../../public/slide/slide2/img1.png"
import img2 from "../../public/slide/slide2/img2.png"
import * as motion from "motion/react-client"
import { motionVariant } from "@/motion/motion";
import Link from "next/link";

export default function Slide2() {
    const amount = .2
    return (
        <motion.div className="w-full flex justify-center overflow-hidden h-screen"
            variants={motionVariant.container()}
            initial="hidden"
            whileInView="show"
            viewport={{ amount, once: false }}
        >
            <Link className=" max-w-7xl grid grid-cols-1 lg:grid-cols-2 pt-22 p-4 md:px-8 lg:px-16 items-center " href={{ pathname: "products/" }}>
                <div className=" flex flex-col gap-4 md:gap-8 justify-center items-center lg:items-start ">
                    <Title />
                    <Property />
                    <motion.div className=" w-full md:w-[60vw] lg:w-[70%]" variants={motionVariant.fade_left(0, 100)}>
                        <Image className="" src={img1} width={0} height={0} alt="" unoptimized />
                    </motion.div>
                </div>
                <motion.div variants={motionVariant.fade_right(0, 100)} >
                    <Image className=" w-full " src={img2} width={0} height={0} alt="" unoptimized />
                </motion.div>
            </Link>
        </motion.div>
    )

};
function Title() {
    return <div className=" flex flex-col text-center lg:text-start ">
        <motion.span className=" text-[36px] md:text-[48px] font-bold text-nowrap" variants={motionVariant.fade_up(0, 50)} >เครื่องพิมพ์บาร์โค้ด </motion.span>
        <motion.span className=" text-[22px] md:text-[36px]" variants={motionVariant.fade_up(.3, 50)} > ที่ธุรกิจทั่วโลกไว้วางใจ </motion.span>
    </div>

}
function Property() {
    return <div className=" flex flex-col gap-4 md:gap-8 ">
        <List a="เพิ่มประสิทธิภาพการพิมพ์ฉลากเพื่อธุรกิจที่เติบโต" b="Efficiency to Support Business Growth" />
        <List a="พิมพ์คมชัด รวดเร็ว ทุกงานบาร์โค้ด" b="Sharp Prints, Fast Performance" />
        <List a="ทนทาน แม่นยำ พร้อมรองรับทุอุตสาหกรรม" b="Precision for Every Industry" />
    </div>

}
function List({ a, b }: { a?: string, b?: string }) {
    return (
        <motion.div className=" flex flex-col text-center lg:text-start" variants={motionVariant.fade_up(.6, 50)}>
            <span className="text-gray-5 text-[14px] md:text-[16px]">{a}</span>
            <span className="text-gray-4 text-[10px] md:text-[12px]">{b}</span>
        </motion.div>
    )
}