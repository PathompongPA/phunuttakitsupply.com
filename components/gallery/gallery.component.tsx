"use client"
import Image from "next/image";
import { useState } from "react";

type prop = {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    images: any[]
}
export default function Gallery({ images }: prop) {
    const [mainImage, setMainImage] = useState(images[0].directus_files_id.id)
    const baseUrl = process.env.NEXT_PUBLIC_URL_HOST_CLIENT + "assets/"
    const toggleImage = (newImage: string) => { setMainImage(newImage) }
    return (
        <div className=" w-full h-fit relative   gap-2 flex flex-col lg:flex-row ">
            <Image className=" shadow-lg/50 shadow-gray-3/25 border border-gray-1 rounded-lg p-4 w-full md:w-112.5 aspect-square object-cover duration-300 " src={baseUrl + mainImage} alt="" width={0} height={0} unoptimized />
            <div className=" flex gap-2 w-fit md:flex-row  lg:flex-col  ">
                {images?.map(({ directus_files_id }) => {
                    const image = directus_files_id.id
                    return (
                        <Image
                            className=" border border-gray-1 w-18.75 aspect-square cursor-pointer lg:active:scale-90 duration-300 rounded-lg shadow-lg/50 shadow-gray-3/25 "
                            onMouseOver={() => { toggleImage(image) }}
                            src={baseUrl + image}
                            alt=""
                            key={directus_files_id.id}
                            width={0}
                            height={0}
                            unoptimized
                        />)
                })}
            </div>
        </div>
    )
};
