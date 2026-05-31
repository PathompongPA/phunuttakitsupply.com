import Image from "next/image";
import image from "../../public/image/LINE_20260531_231800.png"
import Button from "../material/button.component";

export default function About() {
    return (
        <div className=" relative overflow-hidden w-full flex justify-center ">
            <div className=" grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl md:gap-4 lg:gap-8 p-4 lg:p-16 ">
                <Image className=" rounded-2xl z-10 " src={image} alt="" />
                <div className=" flex flex-col justify-center items-end gap-8 z-10 border *:border">
                    <h1 className=" text-4xl font-bold text-wrap">ขับเคลื่อนทุกโรงงานไปกับอะไหล่ที่พร้อมใช้งาน</h1>
                    <p className=" text-gray-3 text-wrap text-[20px]">
                        <h2 className=" text-orange w-full font-bold "> ภูณัฐกิจ ซัพพลายส์ จำกัด </h2>
                        <span className="text-[16px]">
                            มุ่งมั่นสู่การเป็นผู้นำด้านการจัดจำหน่ายอะไหล่อุตสาหกรรมชิ้นส่วนเครื่องจักรและอุปกรณ์สำหรับโรงงานอุตสาหกรรม
                        </span>
                    </p>
                    <Button>ข้อมูลเพิ่มเติม</Button>
                </div>
            </div>
            <span className=" absolute -left-1/5 -top-1/2 h-1/2 w-full  -rotate-20  bg-orange  z-0 "></span>
            <span className=" absolute -right-1/5  -bottom-1/2 h-1/2 w-full  -rotate-20 bg-orange z-0 "></span>
        </div>
    )
};
