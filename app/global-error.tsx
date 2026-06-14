"use client";

import Link from "next/link";

export default function GlobalError() {
    return (
        <html>
            <body className=" w-full h-screen flex justify-center items-center flex-col gap-8">
                <Link href={{ pathname: "/" }} className="font-bold text-[10px] lg:text-[12px] text-gray-6 underline text-orange">บริษัท ภูณัฐกิจ ซัพพลายส์ จำกัด</Link>
                <div className=" flex flex-col gap-4 items-center">
                    <h2 className="text-xl lg:text-sm text-gray-3" >ขออภัยในความไม่สะดวก</h2>
                    <h1 className=" text-2xl lg:text-4xl text-gray-4 font-bold">ระบบขัดข้องชั่วคราว </h1>
                </div>
            </body>
        </html>
    );
}