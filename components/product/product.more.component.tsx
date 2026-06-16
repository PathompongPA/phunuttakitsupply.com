import { getData } from "@/utility";
import ProductCard from "./product.card.component";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default async function ProductMore() {
    const product = await getData("product", {
        fields: [
            "name",
            "thumbnail",
            "brand_id.name",
            "brand_id.image",
            "category_id.name",
            "type_id.name"
        ],
    })
    return (
        <div className=" w-full flex flex-col items-center justify-center">
            <div className=" flex flex-col gap-4 max-w-7xl w-full p-4 lg:p-16 lg:py-8 ">
                <div className=" flex justify-between w-full">
                    <h2 className="text-2xl font-semibold">สินค้าที่เกี่ยวข้อง</h2>
                    <div className=" *:hover:cursor-pointer gap-4 *:active:scale-90 *:ease-out hidden ">
                        <ChevronLeft size={24} strokeWidth={4} />
                        <ChevronRight size={24} strokeWidth={4} />
                    </div>
                </div>
                <div className="w-full overflow-hidden ">
                    <div className=" flex gap-4 md:grid md:grid-cols-3 lg:grid-cols-5  md:gap-1 *:min-w-50 w-full *:max-w-75 *:min-h-full overflow-x-scroll lg:overflow-x-hidden select-none ">
                        {product?.map(({ name, thumbnail, brand_id, category_id, type_id }) =>
                            <ProductCard
                                key={name}
                                name={name}
                                thumbnail={thumbnail}
                                brand={brand_id?.name}
                                category={category_id?.name}
                                type={type_id?.name}
                                brandImage={brand_id?.image}
                            />
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
};
