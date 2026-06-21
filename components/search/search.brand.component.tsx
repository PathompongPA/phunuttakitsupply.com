import { getData } from "@/utility"
import SearchBrandButton from "./brand.button.component"

type Props = {
    searchParams: Promise<{
        category?: string | string[]
        brand?: string | string[]
        type?: string | string[]
        search?: string
    }>
}
export default async function SearchBrand({ searchParams }: Props) {
    const { category, type } = await searchParams;

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

    if (type) {
        filter.product = {
            type: {
                name: {
                    _eq: type
                }
            }
        }
    }

    const brand = await getData("brand", {
        fields: ["*", "type.type_id.*", "product.*.*"],
        sort: ["sort"],
        filter
    })
    // console.log("brand : ", type, brand);
    return (
        <div className=" flex flex-col gap-4 px-4 py-2 ">
            <span className=" underline text-[12px] md:text-[12px] text-gray-5">แบรนด์</span>
            <div className=" flex gap-4  md:flex-col items-start flex-wrap">
                {brand?.map(({ id, name }) =>
                    <SearchBrandButton key={id} name={name} />
                )}
            </div>
        </div>
    )

};
