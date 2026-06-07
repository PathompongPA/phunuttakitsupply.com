import { getData } from "@/utility"
import Image from "next/image"
import Link from "next/link"
import NotFoundItem from "../material/not.found.item"

type Props = {
    searchParams?: {
        category?: string | string[]
        brand?: string | string[]
        type?: string | string[]
        search?: string
    }
}

export default async function ItemSearch({ searchParams }: Props) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const filter: any = {}
    const toArray = (value?: string | string[]) => {
        if (!value) return []
        return Array.isArray(value) ? value : [value]
    }
    const categories = toArray(searchParams?.category)
    const brands = toArray(searchParams?.brand)
    const types = toArray(searchParams?.type)
    const search = searchParams?.search ?? ""

    if (categories.length) {
        filter.category_id = {
            name: {
                _in: categories
            }
        }
    }

    if (brands.length) {
        filter.brand_id = {
            name: {
                _in: brands
            }
        }
    }

    if (types.length) {
        filter.type_id = {
            name: {
                _in: types
            }
        }
    }

    const items = await getData("product", {
        fields: [
            "name",
            "thumbnail",
            "brand_id.name",
            "brand_id.image",
            "category_id.name",
            "type_id.name"
        ],
        filter,
        search: search
    })

    const url = process.env.NEXT_PUBLIC_URL_HOST_CLIENT + "assets/"
    const title = `ผลลัพธ์ ${items?.length ?? 0} รายการ`

    return (
        <div className="flex flex-col gap-4 md:gap-2 w-full">
            <h2 className="text-gray-3 text-[14px] font-thin md:text-[12px] w-full text-end">
                {title}
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 h-fit gap-2 lg:gap-4 w-full">
                {items?.length <= 0 ?
                    <NotFoundItem />
                    : items?.map(({ name, thumbnail, brand_id, category, type }) => (
                        <Link
                            href={`/products/${name}`}
                            className="aspect-square h-fit rounded-lg relative  border border-gray-2"
                            key={name}
                        >
                            <Image
                                className="w-full h-full object-cover"
                                src={url + thumbnail}
                                width={0}
                                height={0}
                                alt={name}
                                unoptimized
                            />
                            <Image
                                className=" h-full max-h-6.25 w-fit aspect-video border-gray-2 bg-white rounded-xs object-contain  border absolute top-2 left-2 "
                                src={url + brand_id?.image}
                                width={0}
                                height={0}
                                alt=""
                                unoptimized
                            />

                            <div className="flex flex-col gap-0 p-2">
                                <div className="font-semibold text-[12px] lg:text-[10px] text-gray-3">
                                    {brand_id?.name}
                                </div>

                                <span className="font-bold text-[16px] text-gray-5">
                                    {name}
                                </span>

                                <div className="*:text-[12px] *:lg:text-[10px] text-gray-3 *:truncate font-light flex flex-row justify-between">
                                    <div>{category?.name}</div>
                                    <div>{type?.name}</div>
                                </div>

                                <div className="my-2 p-2 text-[14px] lg:text-[10px] font-semibold text-center rounded-3xl bg-orange text-white">
                                    รายละเอียด
                                </div>
                            </div>
                        </Link>
                    ))}
            </div>
        </div>
    )
}