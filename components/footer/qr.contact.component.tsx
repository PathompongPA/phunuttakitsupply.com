import Link from "next/link"
import { QRCodeSVG } from "qrcode.react"

export default function QrContact() {
    const urlLine = "https://line.me/ti/p/NuDh2mAbCf"
    return (
        <div className=" text-orange text-center flex flex-col gap-2 font-bold  w-full md:w-fit justify-center items-center lg:py-8 rounded-3xl aspect-3/4 bg-white ">
            <QRCodeSVG value={urlLine} fgColor="#2A2A2A" bgColor="#FFFFFF" />
            <Link className="  text-gray-5 5text-lg  md:text-[16px] lg:text-[15px] " target="_blank" href={{ pathname: "https://line.me/ti/p/NuDh2mAbCf" }} >
                @phunattakit_supply
            </Link>
            <Link className="  text-gray-5 text-2xl  md:text-[24px] lg:text-[22px] " target="_blank" href={{ pathname: "tel:+66996785501" }} >
                099-678-5501
            </Link>
        </div >
    )

};
