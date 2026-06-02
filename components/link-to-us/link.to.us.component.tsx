import Button from "../material/button.component";
import Title from "../material/title.component";

export default function LinkToUs() {
    return (
        <div className=" bg-gray-6 w-full flex justify-center">
            <div className=" max-w-7xl p-8 py-16 gap-12 flex flex-col justify-center items-center text-center">
                <Title className="text-gray-2 ">กำลังมองหาอะไหล่อุตสาหกรรมหรืออุปกรณ์สำหรับโรงงาน?</Title>
                <span className=" text-gray-3">ติดต่อทีมงานของเราเพื่อสอบถามข้อมูลสินค้าขอใบเสนอราคาและรับคำแนะนำเพิ่มเติมได้ทันที</span>
                <Button className="text-gray-2">ติดต่อสอบถาม</Button>
            </div>
        </div>
    )
};
