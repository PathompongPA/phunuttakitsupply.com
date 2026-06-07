import { cva } from "class-variance-authority";
import Title from "../material/title.component";
import Button from "../material/button.component";
import { getData } from "@/utility";
import CategoryCard from "./category.card.component";

const styleCategory = cva(" flex flex-col p-4 gap-4 bg-gray-1 lg:gap-8 lg:p-16 lg:px-36 max-w-7xl",)

export default async function Category() {
    const category = await getData("category", { sort: ["sort"] })
    return (
        <div className=" bg-gray-1 w-full flex justify-center">
            <div className={styleCategory()}>
                <div className=" flex justify-between gap-4 ">
                    <Title className="text-wrap">ครบทุกหมวดอุปกรณ์อุตสาหกรรม</Title>
                    <Button pathname="/products">
                        ทั้งหมด
                    </Button>
                </div>
                <div className=" grid grid-cols-4 grid-rows-2  gap-4  md:gap-4">
                    {category?.map(({ name, image, name_en }, index) =>
                        <CategoryCard
                            index={index}
                            key={name}
                            img={image}
                            name={name}
                            name_en={name_en}
                            query={{ category: name }}
                        />
                    )}
                </div>
            </div>
        </div>
    )
};
