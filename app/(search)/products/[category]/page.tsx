import { NavigationBar, SearchProduct } from "@/components";
import { generateSEO } from "@/utility/seo/seo";

type prop = {
    params: Promise<{
        category: string
        type: string
        brand: string
    }>
}

export async function generateMetadata({ params }: prop) {
    const { category } = await params;
    const data: Record<string, { title: string; description: string }> = {
        "มอเตอร์ไฟฟ้า": {
            title: "จำหน่ายมอเตอร์ไฟฟ้าโรงงาน ทุกขนาด แบรนด์ชั้นนำ | ภูณัฐกิจ ซัพพลาย",
            description: "ศูนย์รวมมอเตอร์ไฟฟ้าสำหรับโรงงานอุตสาหกรรม มอเตอร์ 3 เฟส ทุกขนาด สเปกมาตรฐาน แบรนด์ชั้นนำระดับโลก แข็งแรงทนทาน รองรับงานหนัก เช็กราคาและรับคำปรึกษาฟรี"
        },
        "บาร์โค้ดซัพพลายส์": {
            title: "จำหน่ายบาร์โค้ดซัพพลาย สติกเกอร์ลาเบล ริบบอนบาร์โค้ด ราคาโรงงาน | ภูณัฐกิจ",
            description: "จำหน่ายอุปกรณ์บาร์โค้ดซัพพลายครบวงจร สติกเกอร์ลาเบล ผ้าหมึกริบบอนบาร์โค้ด (Ribbon) เกรดพรีเมียมสำหรับโรงงานและคลังสินค้า ราคาโรงงาน ตอบโจทย์ทุกระบบพิมพ์"
        },
        "ปั๊มและวาล์ว": {
            title: "จำหน่ายปั๊มและวาล์วอุตสาหกรรม ทุกประเภท พร้อมส่ง | ภูณัฐกิจ ซัพพลาย",
            description: "คลังสินค้าปั๊มและวาล์วอุตสาหกรรม ปั๊มน้ำโรงงาน วาล์วควบคุมงานระบบของเหลวและก๊าซ ทุกประเภท คุณภาพสูง แบรนด์แท้ มีใบรับรอง มาตรฐาน ISO พร้อมส่งด่วนทั่วไทย"
        },
        "ปั๊มลมอุตสาหกรรม": {
            title: "จำหน่ายปั๊มลมอุตสาหกรรม ปั๊มลมโรงงาน ทุกขนาด | ภูณัฐกิจ ซัพพลาย",
            description: "จำหน่ายเครื่องปั๊มลมอุตสาหกรรม ปั๊มลมโรงงานระบบสกรูและลูกสูบ ประสิทธิภาพสูง ประหยัดพลังงาน ตอบโจทย์ทุกไลน์การผลิต บริการหลังการขายครบวงจร แนะนำโดยผู้เชี่ยวชาญ"
        }
    }

    return generateSEO({
        title: data[category]?.title,
        description: "",
        keywords: [""],
    })

}
export default async function Page({ params }: prop) {
    return (
        <div className=" w-full">
            <NavigationBar search={true} />
            <SearchProduct params={params} />
        </div>

    )

};
