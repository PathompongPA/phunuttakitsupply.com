import { getData } from "@/utility"
import Image from "next/image"
import Link from "next/link"

type Props = {
    searchParams?: {
        category?: string | string[]
        brand?: string | string[]
        type?: string | string[]
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

    if (categories.length) {
        filter.category = {
            name: {
                _in: categories
            }
        }
    }

    if (brands.length) {
        filter.brand = {
            name: {
                _in: brands
            }
        }
    }

    if (types.length) {
        filter.type = {
            name: {
                _in: types
            }
        }
    }

    const items = await getData("product", {
        fields: [
            "name",
            "thumbnail",
            "brand.name",
            "category.name",
            "type.name"
        ],
        filter
    })

    const url = process.env.NEXT_PUBLIC_URL_HOST + "assets/"
    const title = `ผลลัพธ์ ${items?.length ?? 0} รายการ`

    return (
        <div className="flex flex-col gap-4 md:gap-2 w-full">
            <h2 className="text-gray-3 text-[14px] font-thin md:text-[12px] w-full text-end">
                {title}
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 h-fit gap-2 lg:gap-4 w-full">
                {items?.map(({ name, thumbnail, brand, category, type }) => (
                    <Link
                        href={`/products/${name}`}
                        className="aspect-square rounded-lg"
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

                        <div className="flex flex-col gap-0 p-2">
                            <div className="font-semibold text-[12px] lg:text-[10px] text-gray-3">
                                {brand?.name}
                            </div>

                            <span className="font-bold text-[16px] text-gray-5">
                                {name}
                            </span>

                            <div className="*:text-[12px] *:lg:text-[10px] text-gray-3 *:truncate font-light flex flex-row justify-between">
                                <div>{category?.name}</div>
                                <div>{type?.name}</div>
                            </div>

                            <div className="my-2 p-2 text-[14px] lg:text-[10px] font-semibold text-center rounded-lg bg-orange text-white">
                                รายละเอียด
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}