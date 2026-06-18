import Button from "../material/button.component";
import Title from "../material/title.component";
import { motionVariant } from "@/motion/motion";
import * as motion from "motion/react-client"

export default function LinkToUs() {
    return (
        <motion.div
            className=" bg-gray-6 w-full flex justify-center"
            variants={motionVariant.container()}
            initial="hidden"
            whileInView="show"
            viewport={{ amount: .2, once: false }}
        >
            <div className=" max-w-7xl p-8 py-16 gap-12 flex flex-col justify-center items-center text-center">
                <motion.div variants={motionVariant.fade_up(0, 100)} >
                    <span className="text-gray-2 text-2xl lg:text-[32px] font-bold">กำลังมองหาอะไหล่อุตสาหกรรมหรืออุปกรณ์สำหรับโรงงาน?</span>
                </motion.div>
                <motion.div variants={motionVariant.fade_up(0, 100)} >
                    <span className=" text-gray-3">ติดต่อทีมงานของเราเพื่อสอบถามข้อมูลสินค้าขอใบเสนอราคาและรับคำแนะนำเพิ่มเติมได้ทันที</span>
                </motion.div>
                <motion.div variants={motionVariant.scale_up(.5)} >
                    <Button className="text-gray-2" _blank={true} pathname="https://line.me/ti/p/NuDh2mAbCf">ติดต่อสอบถาม</Button>
                </motion.div>
            </div>
        </motion.div>
    )
};
