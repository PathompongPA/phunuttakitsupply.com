import Image from "next/image";
import bg from "../../public/slide/slide3/img1.png"
import brands from "../../public/slide/slide3/img2.png"
import { MotionFade, MotionFadeLeft, MotionFadeUp } from "@/motion/motion";
import Link from "next/link";


export default function Slide3() {
    return (
        <div className=" p-4 pt-22 h-screen relative w-full flex justify-center " >
            <Link className=" max-w-7xl flex  justify-center items-center lg:px-16  " href={{
                pathname: "/products/", query: {
                    type: "RIBBON"
                }
            }}>
                <MotionFadeLeft className=" absolute w-[80%] top-1/2 -translate-y-1/3 left-1/2 -translate-x-1/2 z-0 lg:translate-0 md:w-[60%] lg:static  lg:w-full">
                    <Image src={bg} width={0} height={0} alt="" />
                </MotionFadeLeft>
                <div className=" flex flex-col justify-between items-center h-full z-30 lg:justify-center lg:gap-8 lg:items-end lg:w-fit ">
                    <div className=" flex flex-col items-center gap-4 md:flex-col">
                        <div className=""></div>
                        <div className=" flex flex-col text-center lg:text-end w-full ">
                            <MotionFadeUp delay={.3} className=" text-[34px] md:text-[46px] font-bold"> ผ้าหมึกริบบอน </MotionFadeUp>
                            <MotionFadeUp delay={.6} className="text-[26px] md:text-[36px]"> สำหรับเครื่องพิมพ์บาร์โค้ด </MotionFadeUp>
                        </div>
                        <MotionFadeUp delay={.9} className="text-center md:text-[18px]">“พิมพ์ลื่นไม่มีสะดุดฉลากสินค้าคมชัดทนทาน ทุกสภาพแวดล้อม”</MotionFadeUp>
                        <div className=" flex gap-2 *:bg-orange *:p-2 *:px-4 *:rounded-xl *:text-white z-30">
                            <MotionFadeLeft delay={.3}>WAX</MotionFadeLeft>
                            <MotionFadeLeft delay={.6}>WAX RESIN</MotionFadeLeft>
                            <MotionFadeLeft delay={.9}>RESIN</MotionFadeLeft>
                        </div>
                    </div>
                    <MotionFadeUp delay={1.3} className=" w-full md:w-[70%] lg:w-[85%] backdrop-blur-sm">
                        <Image src={brands} width={0} height={0} alt="" />
                    </MotionFadeUp>
                </div>
            </Link>
            <Background />
        </div>
    )

};
function Background() {
    return (
        <MotionFade className=" absolute w-full h-full opacity-40 -z-10 top-0 left-0">
            <svg xmlns='http://www.w3.org/2000/svg' width='100%' height='100%' opacity={.5} >
                <defs>
                    <linearGradient id='a' x1='0' x2='0' y1='0' y2='1' gradientTransform='rotate(162,0.5,0.5)'>
                        <stop offset='0' stopColor='#003491' />
                        <stop offset='1' stopColor='#FFFFFF' />
                    </linearGradient>
                </defs>
                <pattern id='b' width='24' height='24' patternUnits='userSpaceOnUse'>
                    <circle fill='#ffffff' cx='12' cy='12' r='12' />
                </pattern>
                <rect width='100%' height='100%' fill='url(#a)' />
                <rect width='100%' height='100%' fill='url(#b)' fillOpacity='0.1' />
            </svg>
            <svg xmlns='http://www.w3.org/2000/svg' width='100%' height='100%' >
                <defs>
                    <linearGradient id='a' x1='0' x2='0' y1='0' y2='1' gradientTransform='rotate(162,0.5,0.5)'>
                        <stop offset='0' stopColor='#003491' />
                        <stop offset='1' stopColor='#FFFFFF' />
                    </linearGradient>
                </defs>
                <pattern id='b' width='24' height='24' patternUnits='userSpaceOnUse'>
                    <circle fill='#ffffff' cx='12' cy='12' r='12' />
                </pattern>
                <rect width='100%' height='100%' fill='url(#a)' />
                <rect width='100%' height='100%' fill='url(#b)' fillOpacity='0.1' />
            </svg>
        </MotionFade>
    )

}
