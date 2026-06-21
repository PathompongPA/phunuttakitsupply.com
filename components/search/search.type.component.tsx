import { getData } from "@/utility"
import SearchTypeButton from "./type.button.component"

type Props = {
    searchParams: Promise<{
        category?: string | string[]
        brand?: string | string[]
        type?: string | string[]
        search?: string
    }>
}
export default async function SearchTypeProduct({ searchParams }: Props) {
    const { category } = await searchParams;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const filter: any = {}

    filter.product = {
        _some: {
            id: {
                _nnull: true
            }
        }
    }

    if (category !== "ทั้งหมด") {
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
    console.log("type : ", typeProduct);

    return (
        typeProduct.length !== 0 &&
        <div className=" flex flex-col gap-4 px-4 py-2 " >
            <span className=" text-gray-5 text-[12px] md:text-[12px] underline">ประเภท</span>
            <div className=" flex gap-4 md:flex-col flex-wrap">
                {typeProduct?.map(({ id, name }) =>
                    <SearchTypeButton key={id} name={name} />
                )}
            </div>
        </div>
    )

};
