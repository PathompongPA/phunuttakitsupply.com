import Image from "next/image";
import bg from "../../public/slide/slide3/img1.png"
import brands from "../../public/slide/slide3/img2.png"
import { MotionFadeLeft, MotionFadeUp } from "@/motion/motion";


export default function Slide3() {
    return (
        <div className=" p-4 pt-22 h-screen relative flex  justify-center items-center lg:px-16 max-w-7xl"
        >
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
        </div>
    )

};
