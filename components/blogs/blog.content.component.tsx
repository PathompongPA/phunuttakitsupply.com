import { getData } from "@/utility"
import dayjs from "dayjs";

type prop = {
    id: string
}
export default async function BlogContent({ id }: prop) {
    const [blog] = await getData("blog", {
        filter: {
            id: {
                _eq: id
            }
        },
        fields: [
            "*",
            "user_updated.first_name",
        ]
    })
    const createAt = dayjs(blog?.data_create).format("MMMM YYYY")
    return (
        <div className=" w-screen min-h-screen  flex flex-col items-center ">
            <div className=" max-w-5xl min-h-screen bg-gry-1 flex flex-col gap-8 w-full md:px-4 ">
                <div className=" flex flex-col gap-4 lg:gap-8 p-8 lg:p-8 items-center bg-gray-50 ">
                    <div className=" w-full  text-[14px] md:text-[12px] lg:text-[16px] " dangerouslySetInnerHTML={{ __html: blog?.content }}></div>
                    <div className=" flex gap-2 justify-end w-full text-[12px] ">
                        <div className=" text-gray-5">{createAt}</div>
                        <div className=" text-gray-5"> Posted by {blog?.user_updated?.first_name}</div>
                    </div>
                </div>
            </div>
        </div>
    )

};
