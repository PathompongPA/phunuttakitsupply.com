import { MotionFadeUp, MotionFadeZoomOut } from "@/motion/motion"
import Image from "next/image"
import option1 from "../../public/slide/slide4/prop1.png"
import option2 from "../../public/slide/slide4/prop2.png"
import brand1 from "../../public/slide/slide4/logo1.png"
import brand2 from "../../public/slide/slide4/logo2.png"
import brand3 from "../../public/slide/slide4/logo3.png"
import brand4 from "../../public/slide/slide4/logo4.png"
import bg from "../../public/slide/slide4/bg.png"
import { StaticImport } from "next/dist/shared/lib/get-img-props"

export default function Slide4() {
    return (
        <div className=" relative grid lg:grid-cols-2 pt-22 px-8 h-screen overflow-visible">
            <div className=" flex flex-col justify-around ">
                <Title />
                <ListOption />
                <ListBrand />
            </div>
            <Background />
        </div>
    )
};

function Title() {
    return (
        <div className=" flex flex-col gap-4  text-center lg:text-start">
            <div className="">
                <MotionFadeUp className=" text-[28px] md:text-[48px] font-bold">รับทำสติ๊กเกอร์ทุกชนิด</MotionFadeUp>
                <MotionFadeUp delay={.2} className=" text-[26px] md:text-[40px] ">สติ๊กเกอร์สินค้า ฉลากสินค้า</MotionFadeUp>
            </div>
            <MotionFadeUp delay={.4} className=" text-[14px] md:text-[18px] text-gray-4">สั่งทำตามแบบของลูกค้า Make To Order</MotionFadeUp>
        </div>
    )
}
function ListOption() {
    return (
        <div className=" flex w-full justify-around">
            <Option delay={.5} img={option1} label="ฉลากสินค้า" ></Option>
            <Option delay={.7} img={option2} label="สติกเกอร์สินค้า" ></Option>
        </div>
    )

}
function Option({ img, label, delay = 0 }: { img: StaticImport, label: string, delay?: number }) {
    return (
        <MotionFadeZoomOut delay={delay} className=" flex flex-col justify-center items-center">
            <Image className="w-50" src={img} alt="" unoptimized />
            <span className=" text-gray-4 text-[12px] lg:text-[16px]">{label}</span>
        </MotionFadeZoomOut>
    )

}

function ListBrand() {
    return (
        <MotionFadeUp delay={.4} className=" grid grid-cols-2 gap-y-2 md:grid-cols-4 justify-center items-center ">
            <Brand src={brand1} />
            <Brand src={brand2} />
            <Brand src={brand3} />
            <Brand src={brand4} />
        </MotionFadeUp>
    )

}

function Brand({ src }: { src: StaticImport }) {
    return <Image className=" w-37.5" src={src} alt="" unoptimized />
}

function Background() {
    return (
        <MotionFadeUp className=" absolute bottom-0 w-[150%] left-1/2 -translate-x-1/2 lg:translate-0 lg:right-0 lg:top-1/2 lg:-translate-y-3/5 lg:w-[55%] -z-10">
            <Image className="w-full" src={bg} alt="" />
        </MotionFadeUp>
    )
}