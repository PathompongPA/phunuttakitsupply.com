import { Blog, SearchProduct } from "@/components";

export default function Page() {
    return (
        <div className=" flex w-full flex-col border *:border">
            <SearchProduct />
            <Blog />
        </div>
    )

};
