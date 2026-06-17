import { getData } from "@/utility"
import Link from "next/link"
type prop = {
    field: string
    pathname: string
}
export default async function BackLink({ field, pathname }: prop) {
    const data = await getData(field, {})
    return (
        <ul className=" flex flex-col gap-4 font-semibold w-full md:w-fit text-center md:text-start ">
            <div className=" first-letter:uppercase text-[16px] md:text-[14px] ">{field}</div>
            <li className=" text-gray-4 flex flex-col text-[12px] md:text-[10px] font-semibold gap-2 w-full  ">
                {data?.map(({ name }) =>
                    <Link href={{ pathname, query: { field: name } }} key={name}>{name}</Link>
                )}
            </li>
        </ul>
    )
};
