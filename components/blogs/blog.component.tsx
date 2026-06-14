import { getData } from "@/utility"
import BlogCard from "./blog.card.component";
import Title from "../material/title.component";
import Button from "../material/button.component";
import * as motion from "motion/react-client"
import { motionVariant } from "@/motion/motion";

export default async function Blog() {
    const blogs = await getData("blog", {})
    return (
        <motion.div
            className=" w-full flex justify-center lg:overflow-visible"
            variants={motionVariant.container()}
            initial="hidden"
            whileInView="show"
            viewport={{ amount: .5, once: false }}
        >
            <div className=" w-full max-w-7xl flex flex-col p-2 py-8 gap-4 lg:p-16 lg:gap-4 ">
                <div className=" flex justify-between" >
                    <motion.div variants={motionVariant.fade_up(0, 50)}>
                        <Title>บทความสำหรับผู้สนใจ</Title>
                    </motion.div>
                    <motion.div variants={motionVariant.scale_up(.3)}>
                        <Button pathname="/blogs">ทั้งหมด</Button>
                    </motion.div>
                </div>
                <div className="overflow-hidden lg:overflow-visible ">
                    <div className="grid  grid-cols-1 md:grid-cols-3 p-4 gap-4 md:gap-4 lg:gap-4 overflow-x-scroll lg:overflow-visible no-scrollbar lg:grid lg:grid-cols-4 ">
                        {blogs?.map(({ id, title, subtitle, image, date_created }, index) =>
                            <BlogCard key={id} title={title} subtitle={subtitle} img={image} create_date={date_created} id={id} index={index} />
                        )}
                    </div>
                </div>
            </div>
        </motion.div>
    )

};
