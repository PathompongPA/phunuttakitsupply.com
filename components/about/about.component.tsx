import Image from "next/image";
import image from "../../public/image/LINE_20260531_231800.png"
import Button from "../material/button.component";
import Title from "../material/title.component";

export default function About() {
    return (
        <div className=" relative overflow-hidden w-full flex justify-center ">
            <div className=" grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl md:gap-4 lg:gap-8 p-4 py-8 lg:p-16 ">
                <Image className=" rounded-2xl z-10 " src={image} alt="" />
                <div className=" flex flex-col justify-center items-end gap-8 z-10 ">
                    <Title>ขับเคลื่อนทุกโรงงานไปกับอะไหล่ที่พร้อมใช้งาน</Title>
                    <p className=" text-gray-3 text-wrap text-[16px]">
                        <span className=" text-orange w-full font-bold "> ภูณัฐกิจ ซัพพลายส์ จำกัด </span>
                        <span className="text-[16px]">
                            มุ่งมั่นสู่การเป็นผู้นำด้านการจัดจำหน่ายอะไหล่อุตสาหกรรมชิ้นส่วนเครื่องจักรและอุปกรณ์สำหรับโรงงานอุตสาหกรรม
                        </span>
                    </p>
                    <Button>ข้อมูลเพิ่มเติม</Button>
                </div>
            </div>
            <span className=" absolute -left-1/3 -top-1/2 h-1/2 w-[120%]  -rotate-20  bg-orange  z-0 "></span>
            <span className=" absolute -right-1/3  -bottom-1/2 h-1/2 w-[120%]  -rotate-20 bg-orange z-0 "></span>
        </div>
    )
};
