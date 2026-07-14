import { NavigationBar, Quotation } from "@/components";
import Title from "@/components/material/title.component";
import { generateSEO } from "@/utility/seo/seo";

export const metadata = generateSEO({
    title: "เกี่ยวกับเรา บริษัท ภูณัฐกิจ ซัพพลาย จำกัด | ซัพพลายเออร์โรงงานอุตสาหกรรม",
    description: "ทำความรู้จัก บริษัท ภูณัฐกิจ ซัพพลาย จำกัด ผู้เชี่ยวชาญด้านการจัดหาและจัดจำหน่ายอุปกรณ์โรงงาน เครื่องจักรกลอุตสาหกรรม มอเตอร์ ปั๊มน้ำ วาล์ว และระบบบาร์โค้ด ด้วยประสบการณ์ที่มุ่งมั่นส่งมอบสินค้าแท้มาตรฐานสากล",
})
export default function Page() {
    return (
        <div className=" w-full flex  flex-col  items-center">
            <NavigationBar />
            <div className="grid md:grid-cols-2 max-w-7xl lg:gap-0 pb-16 ">
                <div className=" lg:gap-4 p-8 lg:p-4 lg:pt-8 max-w-7xl flex flex-col items-center w-full *:max-w-xl *:lg:max-w-3xl gap-8 ">
                    <div className=" flex flex-col gap-4">
                        <Title className=" w-full text-gray-5">บริษัท ภูณัฐกิจซัพพลายส์ จำกัด </Title>
                        <div className=" indent-12 leading-6 lg:leading-7 text-[14px] lg:text-base  text-gray-4 ">
                            <p>
                                เรามุ่งมั่นสู่การเป็นผู้นำด้านการจัดจำหน่ายสินค้าอุตสาหกรรม ชิ้นส่วนเครื่องจักร มอเตอร์ไฟฟ้า ปั้มน้ำอุตสาหกรรม ระบบบาร์โค้ดครบวงจร และบริการซ่อมมอเตอร์ไฟฟ้า เพื่อรองรับการเติบโตของภาคอุตสาหกรรมในประเทศไทยอย่างครบวงจร ครอบคลุมตั้งแต่อุตสาหกรรมเกษตรและอาหาร อุตสาหกรรมยานยนต์ ไปจนถึงอุตสาหกรรมอิเล็กทรอนิกส์และระบบการผลิตสมัยใหม่ เราคัดสรรสินค้า Industrial Supply และ Machine Parts ที่มีมาตรฐาน เพื่อมอบทั้งคุณภาพ ความคุ้มค่า และประสิทธิภาพสูงสุดให้แก่ลูกค้าและคู่ค้าทางธุรกิจ ให้ตอบโจทย์งานซ่อมบำรุง งานระบบสายการผลิตในทุกระดับ ด้วยความเชื่อมั่นในคุณภาพสินค้าและการบริการ
                            </p>
                            <p>
                                บริษัทฯ ยังคงยึดมั่นในแนวทางการดำเนินธุรกิจที่คำนึงถึงความยั่งยืนและความเป็นมิตรต่อสิ่งแวดล้อมเพื่อสร้างความไว้วางใจ และเติบโตเคียงข้างภาคอุตสาหกรรมไทยอย่างมั่นคงในระยะยาว
                            </p>
                        </div>
                    </div>
                    <div className=" flex flex-col gap-4 justify-center items-center w-full text-[14px] lg:text-base ">
                        <Title className=" text-gray-5 w-full ">ข้อมูลติดต่อ</Title>
                        <div className=" grid grid-cols-1 md:grid-cols-1 gap-4 w-full ">
                            <div className=" flex justify-center items gap-8 lg:gap-16 flex-wrap w-full  ">
                                <div className="flex flex-col *:w-full  gap-4  *:flex  *:gap-2 *:text-wrap flex-wrap w-full">

                                    <div className=" flex flex-col gap-2 ">
                                        <div className=" w-fit  text-nowrap font-semibold">บริษัท ภูณัฐกิจซัพพลายส์ จำกัด</div>
                                        <div className=" text-gray-4 ">
                                            54/38 อาคารอาคารชุดจารุเวศม์แมนชั่น ซอย ลาดพร้าว101ซอย48(บ่อปลา) แขวงคลองจั่น เขตบางกะปิ กรุงเทพมหานคร 10240
                                        </div>
                                    </div>

                                    <div className="">
                                        <span className="font-semibold">โทร : </span>
                                        <a className=" flex items-center gap-1  text-gray-5 underline" href="tel:099-6785501">
                                            099-678-5501
                                        </a>
                                    </div>

                                    <div className="">
                                        <span className="font-semibold"> Email : </span>
                                        <a className=" flex items-center gap-1  text-gray-5 underline" href="mailto:salephunattakit@gmail.com">
                                            salephunattakit@gmail.com
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <iframe className=" w-full h-full row-start-1 aspect-9/2 " src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d242.1700578315279!2d100.63220522593434!3d13.795689759367948!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x311d63c259967879%3A0x1422f7a6c2489aaf!2z4LiI4Liy4Lij4Li44LmA4Lin4Lio4Lih4LmMIOC5geC4oeC4meC4iuC4seC5iOC4mQ!5e0!3m2!1sth!2sth!4v1781788167851!5m2!1sth!2sth" width="0" height="0" loading="lazy" ></iframe>
                        </div>
                    </div>
                </div>
                <Quotation />
            </div>
        </div>
    )

};
