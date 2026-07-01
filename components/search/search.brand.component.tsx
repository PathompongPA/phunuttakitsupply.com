import { getData } from "@/utility"
import SearchBrandButton from "./brand.button.component"

type prop = {
    params: Promise<{
        category: string
        type: string
        brand: string
    }>
}
export default async function SearchBrand({ params }: prop) {
    let { category, type, brand } = await params;

    category = decodeURIComponent(category)
    type = decodeURIComponent(type)
    brand = decodeURIComponent(brand)

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const filter: any = {}
    filter.product = {
        _some: {
            id: {
                _nnull: true
            }
        }
    }

    if (category !== "undefined") {
        filter.product = {
            category: {
                name: {
                    _eq: category
                }
            }
        }
    }

    if (type !== "undefined") {
        filter.product = {
            type: {
                name: {
                    _eq: type
                }
            }
        }
    }

    const brands = await getData("brand", {
        fields: ["*", "type.type_id.*", "product.*.*"],
        sort: ["sort"],
        filter
    })

    return (brands.length !== 0 && type !== "undefined" &&
        <div className=" flex flex-col gap-4 px-4 py-2 ">
            <span className=" underline text-[12px] md:text-[12px] text-gray-5">แบรนด์</span>
            <div className=" flex gap-4  md:flex-col items-start flex-wrap">
                {brands?.map(({ id, name, product }) => {
                    const _category = category === "undefined" ? product[0]?.category?.name : category
                    const _type = type === "undefined" ? product[0]?.type?.name : type
                    const pathname = `/products/${_category}/${_type}/${name}`
                    const isActive = name.replace(/\s/g, '') === brand
                    return <SearchBrandButton key={id} name={name} pathname={pathname} isActive={isActive} />
                }
                )}
            </div>
        </div>
    )

};
