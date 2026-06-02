import { CatalogCard } from "@/components";
import Title from "@/components/material/title.component";
import { getData } from "@/utility";

export default async function Page() {
    const catalog = await getData("catalog", {})
    return (
        <div className=" w-full flex flex-col justify-center items-center">
            <div className=" max-w-7xl w-full p-4 lg:p-4 lg:px-16 flex flex-col gap-4 min-h-screen">
                <Title >Catalog</Title>
                <div className=" grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-2 lg:gap-4">
                    {catalog?.map(({ id, name, thumbnail }) => <CatalogCard key={id} id={id} name={name} thumbnail={thumbnail} />)}
                </div>
            </div>
        </div>
    )

};
