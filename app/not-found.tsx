import Link from "next/link";

export default function NotFound() {
    return (
        <div className=" border w-full h-screen flex flex-col justify-center items-center">
            <h1> ไม่พบหน้าที่คุณค้นหา </h1>
            <Link className="underline" href={{ pathname: "/" }}>กลับสู่หน้าหลัก</Link>
        </div>
    )
};
