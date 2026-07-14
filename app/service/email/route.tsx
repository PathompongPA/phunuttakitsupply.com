import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    const body = await req.json();
    const ip =
        req.headers.get("x-forwarded-for")?.split(",")[0].trim() ||
        req.headers.get("x-real-ip") ||
        "Unknown";
    const browser = req.headers.get("user-agent") || "Unknown";
    const html = `
<div style="font-family:Arial,sans-serif;max-width:700px;margin:auto;border:1px solid #ddd;border-radius:8px;overflow:hidden">
    <div style="background:#FF8800;color:#fff;padding:18px">
        <h2 style="margin:0">มีคำขอใบเสนอราคาใหม่</h2>
    </div>

    <div style="padding:24px">
        <table style="width:100%;border-collapse:collapse">
            <tr>
                <td style="padding:8px;font-weight:bold;width:180px">ชื่อ</td>
                <td>${body.firstName} </td>
            </tr>
            <tr>
                <td style="padding:8px;font-weight:bold;width:180px">นามสกุล</td>
                <td>${body.lastName ? body.lastName : "-"}</td>
            </tr>
            <tr>
                <td style="padding:8px;font-weight:bold">เบอร์โทร</td>
                <td>${body.phone}</td>
            </tr>
            <tr>
                <td style="padding:8px;font-weight:bold">LINE</td>
                <td>${body.line ? body.line : "-"}</td>
            </tr>
            <tr>
                <td style="padding:8px;font-weight:bold">Email</td>
                <td>${body.email ? body.email : "-"}</td>
            </tr>
            <tr>
                <td style="padding:8px;font-weight:bold">ที่อยู่</td>
                <td>${body.address ? body.email : "-"}</td>
            </tr>
            <tr>
                <td style="padding:8px;font-weight:bold">ip</td>
                <td>${ip}</td>
            </tr>
            <tr>
                <td style="padding:8px;font-weight:bold">browser</td>
                <td>${browser}</td>
            </tr>
        </table>

        <h3 style="margin-top:30px">รายละเอียด</h3>

        <div style="background:#f8fafc;border-left:4px solid #2563eb;padding:16px;border-radius:4px;white-space:pre-wrap">
            ${body.message}
        </div>

    </div>

    <div style="background:#f1f5f9;padding:12px;text-align:center;font-size:12px;color:#666">
        ส่งจากเว็บไซต์ Phunattakit Supply
    </div>
</div>
`;

    console.log(JSON.stringify(body));
    const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT),
        secure: false,
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
        },
    });
    const info =
        await transporter.sendMail({
            from: process.env.SMTP_USER,
            to: process.env.SMTP_TARGET,
            subject: "ขอใบเสนอราคา",
            html,
        });
    console.log("info : ", info);
    return NextResponse.json({
        success: true,
    });
}