import { getDate } from "@/utility";
import Detail from "./detail.menu.component"
import Item from "./item.component";

export default async function ItemMenu() {
    const category = await getDate("category", {})
    return (
        <div className="relative overflow-visible group">
            <input type="checkbox" className="peer/category" id="category" defaultChecked hidden />
            <Item pathname="/products" dropdown={true}>สินค้า</Item>
            <Detail>
                {category?.map(({ name }) => <Item pathname={`/products/${name}`} variant={"secondary"} key={name}> {name}</Item>)}
            </Detail>
        </div>
    )

};
