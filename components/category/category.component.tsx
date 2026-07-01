import { cva } from "class-variance-authority";
import Title from "../material/title.component";
import Button from "../material/button.component";
import { getData } from "@/utility";
import CategoryCard from "./category.card.component";
import * as motion from "motion/react-client"
import { motionVariant } from "@/motion/motion";

const styleCategory = cva(" flex flex-col p-4 gap-8 lg:gap-8 lg:pt-22 lg:p-16 lg:px-36 max-w-7xl",)

export default async function Category() {
    const category = await getData("category", { sort: ["sort"] })
    return (
        <div className=" w-full flex justify-center bg-gray-1 p-4 ">
            <motion.div
                className={styleCategory()}
                variants={motionVariant.container()}
                initial="hidden"
                whileInView="show"
                whileTap="tap"
                viewport={{ amount: .2, once: true }}
            >
                <div className=" flex justify-between gap-8 ">
                    <motion.div
                        // className=" origin-left"
                        variants={motionVariant.fade_down(0, 20)}
                    >
                        <Title className="text-wrap">ครบทุกหมวดอุปกรณ์อุตสาหกรรม</Title>
                    </motion.div>
                    <motion.div variants={motionVariant.scale_up(.3)} >
                        <Button pathname="/products" >
                            ทั้งหมด
                        </Button>
                    </motion.div>
                </div>
                <div className={` grid grid-cols-4 grid-rows-2  gap-4  md:gap-4`}>
                    {category?.map(({ id, name, image, name_en }, index) => {
                        const imageUrl = process.env.NEXT_PUBLIC_URL_HOST_CLIENT + "assets/" + image + "FILE_ID?width=400&format=webp"
                        return <CategoryCard
                            index={index}
                            key={id}
                            img={imageUrl}
                            name={name}
                            name_en={name_en}
                            query={{ category: name }}
                        />
                    }

                    )}
                </div>
            </motion.div>
        </div>
    )
};
