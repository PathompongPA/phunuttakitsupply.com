"use client";

import Title from "@/components/material/title.component";
import { Check, X } from "lucide-react";
import { useState } from "react";

export default function Quotation() {
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [phone, setPhone] = useState("");
    const [line, setLine] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [message, setMessage] = useState("");

    const clearState = () => {
        setFirstName("");
        setLastName("");
        setPhone("");
        setLine("");
        setEmail("");
        setAddress("");
        setMessage("");
    };

    const send = async () => {
        // ตรวจสอบข้อมูลที่จำเป็น
        if (!firstName.trim() || !phone.trim() || !message.trim()) {
            setStatus("error");
            return;
        }

        try {
            setLoading(true);
            setStatus("idle");

            const res = await fetch("/service/email", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    firstName,
                    lastName,
                    phone,
                    line,
                    email,
                    address,
                    message,
                }),
            });

            if (!res.ok) {
                throw new Error("Send failed");
            }

            clearState();
            setStatus("success");
        } catch (err) {
            console.error(err);
            setStatus("error");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="w-full h-fit row-start-1 lg:col-start-2">
            <div className="w-full h-full flex  lg:p-8 overflow-hidden">
                <div className="w-full h-full bg-gray-2 p-8 lg:p-16 pb-4 flex flex-col gap-4 rounded-4xl">
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            send();
                        }}
                        className="grid grid-cols-2 gap-4"
                    >
                        <Title className=" col-span-2">
                            ให้เราติดต่อกลับหาคุณ
                        </Title>
                        <label className="text-gray-4 col-span-2 text-[14px] lg:text-[18px]">
                            เพียงคุณกรอกข้อมูลและเราจะติดต่อกลับโดยเร็วที่สุด
                        </label>

                        <div className="flex flex-col gap-2 text-[14px] lg:text-base">
                            <label className="font-bold">ชื่อ*</label>
                            <input
                                type="text"
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                                className="border border-gray-3 p-2 bg-white outline-gray-3"
                            />
                        </div>

                        <div className="flex flex-col gap-2 text-[14px] lg:text-base">
                            <label className="font-bold">นามสกุล</label>
                            <input
                                type="text"
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                                className="border border-gray-3 p-2 bg-white outline-gray-3"
                            />
                        </div>

                        <div className="flex flex-col gap-2 text-[14px] lg:text-base ">
                            <label className="font-bold">เบอร์โทรติดต่อ*</label>
                            <input
                                type="text"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                className="border border-gray-3 p-2 bg-white outline-gray-3"
                            />
                        </div>

                        <div className="flex flex-col gap-2 text-[14px] lg:text-base">
                            <label className="font-bold">Line</label>
                            <input
                                type="text"
                                placeholder="(ถ้าหากมี)"
                                value={line}
                                onChange={(e) => setLine(e.target.value)}
                                className="border border-gray-3 p-2 bg-white outline-gray-3"
                            />
                        </div>

                        <div className="flex flex-col gap-2 text-[14px] lg:text-base">
                            <label className="font-bold">Email</label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="border border-gray-3 p-2 bg-white outline-gray-3"
                            />
                        </div>

                        <div className="flex flex-col gap-2 text-[14px] lg:text-base">
                            <label className="font-bold">จังหวัดที่ท่านอยู่อาศัย</label>
                            <input
                                type="text"
                                placeholder="โปรดระบุชื่อจังหวัด"
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                                className="border border-gray-3 p-2 bg-white outline-gray-3"
                            />
                        </div>

                        <div className="flex flex-col gap-2 col-span-2 text-[14px] lg:text-base">
                            <label className="font-bold">สินค้าที่ท่านสนใจ*</label>
                            <textarea
                                rows={5}
                                placeholder="โปรดระบุชื่อสินค้า หรือ รายละเอียดอื่นๆที่ท่านต้องการ"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                className="border border-gray-3 p-2 bg-white outline-gray-3 resize-none"
                            />
                        </div>

                        {/* Status */}
                        <div className="col-span-2 text-[14px] lg:text-base">
                            {
                                status === "success"
                                && (
                                    <div className="rounded-lg bg-green-200 p-4 text-green-700 text-center flex gap-4 text-[16px] ">
                                        <Check strokeWidth={4} />
                                        ส่งข้อมูลเรียบร้อยแล้ว ทีมงานจะติดต่อกลับหาท่านโดยเร็วที่สุด
                                    </div>
                                )}

                            {
                                status === "error"
                                && (
                                    <div className="rounded-lg bg-red-200 p-4 text-red-700 text-center flex gap-4 text-[16px] ">
                                        <X strokeWidth={4} />
                                        ไม่สามารถส่งข้อมูลได้ กรุณาตรวจสอบข้อมูลและลองใหม่อีกครั้ง
                                    </div>
                                )}
                        </div>

                        <div className="flex justify-center col-span-2 mt-2">
                            <button
                                type="submit"
                                disabled={loading}
                                className={`font-bold text-white px-6 py-3 rounded-lg transition-all duration-300 ${loading
                                    ? "bg-gray-400 cursor-not-allowed"
                                    : "bg-orange hover:opacity-80 active:scale-95 cursor-pointer"
                                    }`}
                            >
                                {loading ? "กำลังส่งข้อมูล..." : "ส่งข้อมูล"}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}