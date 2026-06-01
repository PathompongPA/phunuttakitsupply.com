import { getData } from "@/utility";
import Title from "../material/title.component";
import ProductCard from "./product.card.component";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default async function ProductMore() {
    // const page = 3
    // const limit = 3
    // const offset = (page - 1) * limit
    const product = await getData("product", {
        fields: ["name", "thumbnail", "brand.name", "category.name", "type.name"],
    })
    return (
        <div className=" w-screen flex flex-col items-center justify-center">
            <div className=" flex flex-col gap-4 max-w-7xl w-full p-4 lg:p-16 lg:py-8">
                <div className=" flex justify-between w-full">
                    <Title>สินค้าที่เกี่ยวข้อง</Title>
                    <div className=" flex  *:hover:cursor-pointer gap-4 *:active:scale-90 *:ease-out ">
                        <ChevronLeft size={24} strokeWidth={4} />
                        <ChevronRight size={24} strokeWidth={4} />
                    </div>
                </div>
                <div className="w-full overflow-hidden ">
                    <div className=" flex gap-4 *:min-w-50 w-full snap-x *:snap-center *:max-w-75 *:h-fit overflow-x-scroll lg:overflow-x-hidden select-none snap-center">
                        {product?.map(({ name, thumbnail, brand, category, type }) =>
                            <ProductCard
                                key={name}
                                name={name}
                                thumbnail={thumbnail}
                                brand={brand?.name}
                                category={category?.name}
                                type={type.name}
                            />
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
};
