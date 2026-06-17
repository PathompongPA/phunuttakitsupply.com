import Image from "next/image"
import imageQrLine from "../../public/image/line-qr-v3.svg"
import Link from "next/link"

export default function QrContact() {
    return (
        <div className=" text-orange text-center flex flex-col gap-2 font-bold  w-full md:w-fit justify-center items-center">
            <Image className=" w-full  max-w-50 lg:max-w-45" src={imageQrLine} alt="qr-line" width={0} height={0} unoptimized />
            <Link className="  text-orange text-lg  md:text-[16px] lg:text-[15px] " target="_blank" href={{ pathname: "https://line.me/ti/p/NuDh2mAbCf" }} >
                @phunattakit_supply
            </Link>
            <Link className="  text-orange text-2xl  md:text-[24px] lg:text-[22px] " target="_blank" href={{ pathname: "tel:+66996785501" }} >
                099-678-5501
            </Link>
        </div >
    )

};
