import Link from "next/link"

export default function QrContact() {
    return (
        <div className=" text-orange text-center flex flex-col gap-2 font-bold text-lg w-full md:w-fit">
            {/* <div className="" >Contact Us</div> */}
            <div className=" w-full aspect-square bg-orange"></div>
            <Link className=" text-xl  md:text-xs" href={{}}> @phunattakit_supply </Link>
            <Link className=" text-3xl md:text-base" href={{}}>08xxxxxxxx</Link>
        </div>
    )

};
