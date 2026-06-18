import { getData } from "@/utility"
// import Image from "next/image"
// import Link from "next/link"
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
    console.log("category : ", categories[0]);

    if (categories.length) {
        if (categories[0] !== "ทั้งหมด") {
            filter.category = {
                name: {
                    _in: categories
                }
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
            "id",
            "name",
            "thumbnail",
            "brand.name",
            "brand.image",
            "category.name",
            "type.name"
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
                    : items?.map(({ id, name, thumbnail, brand, category, type }) =>
                        <Suspense key={id} fallback={<LoadingComponent />} >
                            <ProductCard
                                name={name}
                                thumbnail={thumbnail}
                                brand={brand?.name}
                                category={category?.name}
                                type={type?.name}
                                brandImage={brand?.image}
                            />
                        </Suspense>
                    )}
            </div>
        </div>
    )
}