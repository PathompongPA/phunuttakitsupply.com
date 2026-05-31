import { getData } from "@/utility"
import BlogCard from "./blog.card.component";
import Title from "../material/title.component";
import Button from "../material/button.component";

export default async function Blog() {
    const blogs = await getData("blogs", {})
    return (
        <div className=" w-full flex justify-center">
            <div className=" w-full max-w-7xl flex flex-col p-4 py-8 gap-4 lg:p-16 lg:gap-8 ">
                <div className=" flex justify-between">
                    <Title>บทความสำหรับผู้สนใจ</Title>
                    <Button pathname="/blogs">ทั้งหมด</Button>
                </div>
                <div className="overflow-hidden ">
                    <div className=" flex flex-row gap-4 overflow-x-scroll lg:overflow-x-hidden snap-x snap-mandatory *:snap-center lg:grid lg:grid-cols-4 ">
                        {blogs?.map(({ id, title, subtitle, img }) =>
                            <BlogCard key={id} title={title} subtitle={subtitle} img={img} id={id} />
                        )}
                    </div>
                </div>
            </div>
        </div>
    )

};
