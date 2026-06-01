export const dynamic = "force-dynamic";
import Detail from "./detail.menu.component"
import Item from "./item.component";

type categoryType = { name?: string, name_en?: string, }

type prop = {
    category: categoryType[]

}

export default function ItemMenu({ category }: prop) {
    return (
        <div className="relative overflow-visible group ">
            <Item pathname="/products" dropdown={true}>สินค้า</Item>
            <Detail>
                {category?.map(({ name }) => <Item pathname={`/products`} query={{ category: name }} variant={"secondary"} key={name}> {name}</Item>)}
            </Detail>
        </div >
    )

};
