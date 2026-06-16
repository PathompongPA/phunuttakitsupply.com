import { getData } from "@/utility"
import Image from "next/image"
import Link from "next/link"
import NotFoundItem from "../material/not.found.item"
import ProductCard from "../product/product.card.component"
import { Suspense } from "react"
import LoadingComponent from "../loading/loading.component"

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

    // const url = process.env.NEXT_PUBLIC_URL_HOST_CLIENT + "assets/"
    const title = `ผลลัพธ์ ${items?.length ?? 0} รายการ`

    return (
        <div className="flex flex-col gap-4 md:gap-2 w-full">
            <span className="text-gray-3 px-2 text-[12px] font-thin md:text-[10px] lg:text-[12px] w-full text-end">
                {title}
            </span>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 h-fit gap-0 lg:gap-1 w-full">
                {items?.length <= 0 ?
                    <NotFoundItem />
                    : items?.map(({ name, thumbnail, brand_id, category_id, type_id }) =>
                        <Suspense key={name} fallback={<LoadingComponent />} >
                            <ProductCard
                                name={name}
                                thumbnail={thumbnail}
                                brand={brand_id?.name}
                                category={category_id?.name}
                                type={type_id?.name}
                                brandImage={brand_id.image}
                            />
                        </Suspense>
                    )}
            </div>
        </div>
    )
}