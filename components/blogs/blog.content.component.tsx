import { getData } from "@/utility"
import dayjs from "dayjs";

type prop = {
    id: string
}
export default async function BlogContent({ id }: prop) {
    const [blog] = await getData("blogs", {
        filter: {
            id: {
                _eq: id
            }
        },
        fields: [
            "*",
            "user_created.first_name",
        ]
    })
    const createAt = dayjs(blog?.data_create).format("MMMM YYYY")
    return (
        <div className=" w-screen  flex flex-col items-center ">
            <div className=" max-w-7xl min-h-screen bg-gry-1 flex flex-col gap-8 w-full ">
                <div className=" flex flex-col gap-4 lg:gap-8 p-4 lg:p-16 lg:py-8 justify-center  items-center">
                    <div className="" dangerouslySetInnerHTML={{ __html: blog?.test }}></div>
                    <div className=" w-full">
                        <div className=" font-bold text-gray-5"> Posted by {blog?.user_created?.first_name}</div>
                        <div className=" font-bold text-gray-5">{createAt}</div>
                    </div>
                </div>
            </div>
        </div>
    )

};
