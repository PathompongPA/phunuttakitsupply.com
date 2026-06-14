import { NavigationBar } from "@/components";
import Title from "@/components/material/title.component";

export default function Page() {
    return (
        <div className=" w-full flex  flex-col  items-center">
            <NavigationBar />
            <div className=" gap-4 lg: p-4 lg:p-16   lg:gap-8 max-w-7xl flex flex-col items-center w-full ">
                <Title className=" text-gray-5">บริษัท ภูณัฐกิจซัพพลายส์ จำกัด </Title>
                <p className=" indent-8 text-justify text-[14px] text-gray-4">
                    เรามุ่งมั่นสู่การเป็นผู้นำด้านการจัดจำหน่ายอะไหล่อุตสาหกรรม ชิ้นส่วนเครื่องจักร และอุปกรณ์สำหรับโรงงานอุตสาหกรรม โดยพร้อมรองรับการเติบโตของภาคอุตสาหกรรมในประเทศไทยอย่างครบวงจร ครอบคลุมตั้งแต่อุตสาหกรรมเกษตรและอาหาร อุตสาหกรรมยานยนต์ ไปจนถึงอุตสาหกรรมอิเล็กทรอนิกส์และระบบการผลิตสมัยใหม่ เราพิถีพิถันในการคัดสรรสินค้า Industrial Supply และ Machine Parts ที่ได้มาตรฐาน เพื่อมอบทั้งคุณภาพ ความคุ้มค่า และประสิทธิภาพสูงสุดให้แก่ลูกค้าและคู่ค้าทางธุรกิจ พร้อมตอบโจทย์งานซ่อมบำรุง งานระบบ และสายการผลิตในทุกระดับด้วยความเชื่อมั่นในคุณภาพการบริการ บริษัทฯ ยังคงยึดมั่นในแนวทางการดำเนินธุรกิจที่คำนึงถึงความยั่งยืนและความเป็นมิตรต่อสิ่งแวดล้อมเพื่อสร้างความไว้วางใจ และเติบโตเคียงข้างภาคอุตสาหกรรมไทยอย่างมั่นคงในระยะยาว       เรามุ่งมั่นสู่การเป็นผู้นำด้านการจัดจำหน่ายอะไหล่อุตสาหกรรม ชิ้นส่วนเครื่องจักร และอุปกรณ์สำหรับโรงงานอุตสาหกรรม โดยพร้อมรองรับการเติบโตของภาคอุตสาหกรรมในประเทศไทยอย่างครบวงจร ครอบคลุมตั้งแต่อุตสาหกรรมเกษตรและอาหาร อุตสาหกรรมยานยนต์ ไปจนถึงอุตสาหกรรมอิเล็กทรอนิกส์และระบบการผลิตสมัยใหม่ เราพิถีพิถันในการคัดสรรสินค้า Industrial Supply และ Machine Parts ที่ได้มาตรฐาน เพื่อมอบทั้งคุณภาพ ความคุ้มค่า และประสิทธิภาพสูงสุดให้แก่ลูกค้าและคู่ค้าทางธุรกิจ พร้อมตอบโจทย์งานซ่อมบำรุง งานระบบ และสายการผลิตในทุกระดับด้วยความเชื่อมั่นในคุณภาพการบริการ บริษัทฯ ยังคงยึดมั่นในแนวทางการดำเนินธุรกิจที่คำนึงถึงความยั่งยืนและความเป็นมิตรต่อสิ่งแวดล้อมเพื่อสร้างความไว้วางใจ และเติบโตเคียงข้างภาคอุตสาหกรรมไทยอย่างมั่นคงในระยะยาว
                </p>
                <div className=" flex flex-col gap-8 justify-center items-center w-full">
                    <Title className=" text-gray-5">ข้อมูลติดต่อ</Title>
                    <div className=" flex justify-center items gap-8 lg:gap-16 flex-wrap ">
                        <div className="flex flex-col *:w-full max-w-125 gap-2 *:flex *:justify-between *:gap-8 *:text-wrap flex-wrap">
                            <div className="">
                                <span className=" w-fit  text-nowrap font-semibold">ที่อยู่</span>
                                <span className=" text-end text-[12px]">  xxxxxxxxxxxx xxxxxxxx xxxxxx xxxxxxxxxxxx </span>
                            </div>
                            <div className="">
                                <span className="font-semibold">โทร</span>
                                <span className=" text-[12px]">  xxxxxxxxx</span>
                            </div>
                            <div className="">
                                <span className="font-semibold"> Email</span>
                                <span className=" text-[12px]">  xxxxxxxx@asdfasdf.com</span>
                            </div>
                            <div className="">
                                <span className="font-semibold">Facebook</span>
                                <span className=" text-[12px]">xxxxxxxxxxxxxxxxxxxx</span>
                            </div>
                        </div>
                        <iframe className=" w-75 h-full aspect-video " src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3874.7034536013102!2d100.62427347455944!3d13.79674189625249!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x311d620cf3bc9b01%3A0xf850f16a5a475506!2z4Lin4Lix4LiU4Lia4Li24LiH4LiX4Lit4LiH4Lir4Lil4Liy4LiH!5e0!3m2!1sth!2sth!4v1780298728992!5m2!1sth!2sth" width="0" height="0" loading="lazy" ></iframe>
                    </div>
                </div>
            </div>
        </div>
    )

};
