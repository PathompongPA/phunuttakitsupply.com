export const dynamic = "force-dynamic";
import { useState } from "react";
import Detail from "./detail.menu.component"
import Item from "./item.component";

type categoryType = { name?: string, name_en?: string, }

type prop = {
    category: categoryType[]

}

export default function ItemMenu({ category }: prop) {
    const [open, setOpen] = useState(false)
    const toggleOpen = () => setOpen(!open)
    return (
        <div className="relative overflow-visible group ">
            <div className=" cursor-pointer" onClick={toggleOpen}>
                <Item pathname="/products" dropdown={true} onClick={toggleOpen}>สินค้า</Item>
            </div>
            <Detail isOpen={open}>
                {category?.map(({ name }) => <Item pathname={`/products`} query={{ category: name }} variant={"secondary"} key={name}> {name}</Item>)}
            </Detail>
        </div >
    )

};
