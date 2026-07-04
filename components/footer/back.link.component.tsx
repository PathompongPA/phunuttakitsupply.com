import { getData } from "@/utility"
import Link from "next/link"
type prop = {
    field: string
    pathname: string
}
export default async function BackLink({ field, pathname }: prop) {
    const data = await getData(field, {})
    return (
        <ul className=" flex flex-col gap-4 font-semibold w-full md:w-fit text-center md:text-start text-gray-2 ">
            <div className=" first-letter:uppercase text-[16px] md:text-[12px] lg:text-[14px] border-b-2 pb-8 md:pb-4 lg:pb-4 border-gray-4">{field}</div>
            <li className=" text-gray-4 flex flex-col text-[16px] md:text-[8px] lg:text-[10px] font-semibold gap-2 w-full  lg:max-h-[200px] flex-wrap lg:gap-4  ">
                {data?.map(({ name }) =>
                    <Link href={{ pathname, query: { field: name } }} key={name}>{name}</Link>
                )}
            </li>
        </ul>
    )
};
