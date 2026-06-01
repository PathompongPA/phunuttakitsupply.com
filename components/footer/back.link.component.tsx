import { getData } from "@/utility"
import Link from "next/link"
type prop = {
    field: string
    pathname: string
}
export default async function BackLink({ field, pathname }: prop) {
    const data = await getData(field, {})
    return (
        <ul className=" flex flex-col gap-2 font-semibold">
            <div className=" first-letter:uppercase text-[12px] ">{field}</div>
            <li className=" text-gray-4 flex flex-col text-[10px] font-semibold gap-1">
                {data?.map(({ name }) =>
                    <Link href={{ pathname, query: { field: name } }} key={name}>{name}</Link>
                )}
            </li>
        </ul>
    )
};
