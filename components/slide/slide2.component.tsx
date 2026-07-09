import Image from "next/image";
import img1 from "../../public/slide/slide2/img1.png"
import img2 from "../../public/slide/slide2/img2.png"
import { MotionFade, MotionFadeLeft, MotionFadeUp } from "@/motion/motion";
import Link from "next/link";

export default function Slide2() {
    return (
        <div className="w-full flex justify-center overflow-hidden h-screen relative" >
            <Link className=" max-w-7xl grid grid-cols-1 lg:grid-cols-2 pt-22 p-4 md:px-8 lg:px-16 items-center " href={{
                pathname: "products/", query: {
                    type: "Printer Barcode"
                }
            }}>
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
            <Background />
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
        <List a="ทนทาน แม่นยำ พร้อมรองรับทุกอุตสาหกรรม" b="Precision for Every Industry" />
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
function Background() {
    return (
        <MotionFade className=" absolute left-0 bottom-0 w-full h-full -z-10 ">
            <svg xmlns='http://www.w3.org/2000/svg' width='100%' className=" w-full h-full opacity-25 ">
                <rect fill='#ffffff' width='540' height='450' />
                <defs>
                    <linearGradient id='a' gradientUnits='userSpaceOnUse' x1='0' x2='0' y1='0' y2='100%' gradientTransform='rotate(340,768,347)'>
                        <stop offset='0' stopColor='#ffffff' />
                        <stop offset='1' stopColor='#0B00FF' />
                    </linearGradient>
                    <pattern patternUnits='userSpaceOnUse' id='b' width='609' height='507.5' x='0' y='0' viewBox='0 0 1080 900'>
                        <g fillOpacity='0.22'>
                            <polygon fill='#444' points='90 150 0 300 180 300' />
                            <polygon points='90 150 180 0 0 0' />
                            <polygon fill='#AAA' points='270 150 360 0 180 0' />
                            <polygon fill='#DDD' points='450 150 360 300 540 300' />
                            <polygon fill='#999' points='450 150 540 0 360 0' />
                            <polygon points='630 150 540 300 720 300' />
                            <polygon fill='#DDD' points='630 150 720 0 540 0' />
                            <polygon fill='#444' points='810 150 720 300 900 300' />
                            <polygon fill='#FFF' points='810 150 900 0 720 0' />
                            <polygon fill='#DDD' points='990 150 900 300 1080 300' />
                            <polygon fill='#444' points='990 150 1080 0 900 0' />
                            <polygon fill='#DDD' points='90 450 0 600 180 600' />
                            <polygon points='90 450 180 300 0 300' />
                            <polygon fill='#666' points='270 450 180 600 360 600' />
                            <polygon fill='#AAA' points='270 450 360 300 180 300' />
                            <polygon fill='#DDD' points='450 450 360 600 540 600' />
                            <polygon fill='#999' points='450 450 540 300 360 300' />
                            <polygon fill='#999' points='630 450 540 600 720 600' />
                            <polygon fill='#FFF' points='630 450 720 300 540 300' />
                            <polygon points='810 450 720 600 900 600' />
                            <polygon fill='#DDD' points='810 450 900 300 720 300' /><polygon fill='#AAA' points='990 450 900 600 1080 600' /><polygon fill='#444' points='990 450 1080 300 900 300' /><polygon fill='#222' points='90 750 0 900 180 900' /><polygon points='270 750 180 900 360 900' /><polygon fill='#DDD' points='270 750 360 600 180 600' /><polygon points='450 750 540 600 360 600' /><polygon points='630 750 540 900 720 900' /><polygon fill='#444' points='630 750 720 600 540 600' /><polygon fill='#AAA' points='810 750 720 900 900 900' /><polygon fill='#666' points='810 750 900 600 720 600' /><polygon fill='#999' points='990 750 900 900 1080 900' /><polygon fill='#999' points='180 0 90 150 270 150' /><polygon fill='#444' points='360 0 270 150 450 150' /><polygon fill='#FFF' points='540 0 450 150 630 150' /><polygon points='900 0 810 150 990 150' /><polygon fill='#222' points='0 300 -90 450 90 450' /><polygon fill='#FFF' points='0 300 90 150 -90 150' /><polygon fill='#FFF' points='180 300 90 450 270 450' /><polygon fill='#666' points='180 300 270 150 90 150' /><polygon fill='#222' points='360 300 270 450 450 450' /><polygon fill='#FFF' points='360 300 450 150 270 150' /><polygon fill='#444' points='540 300 450 450 630 450' /><polygon fill='#222' points='540 300 630 150 450 150' /><polygon fill='#AAA' points='720 300 630 450 810 450' /><polygon fill='#666' points='720 300 810 150 630 150' /><polygon fill='#FFF' points='900 300 810 450 990 450' /><polygon fill='#999' points='900 300 990 150 810 150' /><polygon points='0 600 -90 750 90 750' /><polygon fill='#666' points='0 600 90 450 -90 450' /><polygon fill='#AAA' points='180 600 90 750 270 750' /><polygon fill='#444' points='180 600 270 450 90 450' /><polygon fill='#444' points='360 600 270 750 450 750' /><polygon fill='#999' points='360 600 450 450 270 450' /><polygon fill='#666' points='540 600 630 450 450 450' /><polygon fill='#222' points='720 600 630 750 810 750' /><polygon fill='#FFF' points='900 600 810 750 990 750' /><polygon fill='#222' points='900 600 990 450 810 450' /><polygon fill='#DDD' points='0 900 90 750 -90 750' /><polygon fill='#444' points='180 900 270 750 90 750' /><polygon fill='#FFF' points='360 900 450 750 270 750' /><polygon fill='#AAA' points='540 900 630 750 450 750' /><polygon fill='#FFF' points='720 900 810 750 630 750' /><polygon fill='#222' points='900 900 990 750 810 750' /><polygon fill='#222' points='1080 300 990 450 1170 450' /><polygon fill='#FFF' points='1080 300 1170 150 990 150' /><polygon points='1080 600 990 750 1170 750' /><polygon fill='#666' points='1080 600 1170 450 990 450' /><polygon fill='#DDD' points='1080 900 1170 750 990 750' /></g></pattern ></defs><rect x='0' y='0' fill='url(#a)' width='100%' height='100%' /><rect x='0' y='0' fill='url(#b)' width='100%' height='100%' /></svg>
        </MotionFade>
    )

}