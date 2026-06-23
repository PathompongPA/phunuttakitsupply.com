import { getData } from "@/utility"
import SearchTypeButton from "./type.button.component"

type prop = {
    params: Promise<{
        category: string
        type: string
        brand: string
    }>
}

export default async function SearchTypeProduct({ params }: prop) {
    let { category, type } = await params;
    category = decodeURIComponent(category)
    type = decodeURIComponent(type)

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

    const typeProduct = await getData("type", {
        fields: ["*", "product.*.*"],
        sort: ["sort"],
        filter
    })

    return (
        typeProduct.length !== 0 &&
        <div className=" flex flex-col gap-4 px-4 py-2 " >
            <span className=" text-gray-5 text-[12px] md:text-[12px] underline">ประเภท</span>
            <div className=" flex gap-4 md:flex-col flex-wrap">
                {typeProduct?.map(({ id, name, product }) => {
                    const pathname = `/products/${category === "undefined" ? product[0]?.category?.name : category}/${name}`
                    const isActive = type === name
                    return <SearchTypeButton key={id} name={name} pathname={pathname} isActive={isActive} />
                }
                )}
            </div>
        </div>
    )

};
