import Image from "next/image";
import img1 from "../../public/slide/slide2/img1.png"
import img2 from "../../public/slide/slide2/img2.png"
import { MotionFadeLeft, MotionFadeUp } from "@/motion/motion";
import Link from "next/link";

export default function Slide2() {
    return (
        <div className="w-full flex justify-center overflow-hidden h-screen" >
            <Link className=" max-w-7xl grid grid-cols-1 lg:grid-cols-2 pt-22 p-4 md:px-8 lg:px-16 items-center " href={{ pathname: "products/" }}>
                <div className=" flex flex-col gap-4 md:gap-8 justify-center items-center lg:items-start ">
                    <Title />
                    <Property />
                    <MotionFadeLeft delay={.6} className=" w-full md:w-[60vw] lg:w-[70%]" >
                        <Image className="" src={img1} width={0} height={0} alt="" unoptimized />
                    </MotionFadeLeft>
                </div>
                <MotionFadeLeft delay={0} >
                    <Image className=" w-full " src={img2} width={0} height={0} alt="" unoptimized />
                </MotionFadeLeft>
            </Link>
        </div>
    )

};
function Title() {
    return <div className=" flex flex-col text-center lg:text-start ">
        <MotionFadeLeft delay={0} className=" text-[36px] md:text-[48px] font-bold text-nowrap"  >เครื่องพิมพ์บาร์โค้ด </MotionFadeLeft>
        <MotionFadeLeft delay={0} className=" text-[22px] md:text-[36px]"  > ที่ธุรกิจทั่วโลกไว้วางใจ </MotionFadeLeft>
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
        <MotionFadeUp delay={.9} className=" flex flex-col text-center lg:text-start" >
            <span className="text-gray-5 text-[12px] md:text-[16px]">{a}</span>
            <span className="text-gray-4 text-[8px] md:text-[12px]">{b}</span>
        </MotionFadeUp>
    )
}