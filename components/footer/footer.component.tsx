import BackLink from "./back.link.component";
import QrContact from "./qr.contact.component";

export default async function Footer() {
    return (
        <footer className=" bg-gray-6 w-full flex justify-center items-center flex-col overflow-visible">
            <nav className=" *:lg:min-w-62.5 *:lg:p-2 first:lg:py-8 p-8 lg:p-16  lg:px-8 lg:pb-4   text-white lg:max-w-7xl w-full flex flex-row gap-16 md:gap-4  lg:gap-4 justify-between  items-start  md:justify-between lg:items-start flex-wrap">
                <QrContact />
                <BackLink pathname="/products" field="category" />
                <BackLink pathname="/products" field="type" />
                <BackLink pathname="/products" field="brand" />
            </nav>
            <div className=" text-nowrap text-[16px] p-8 md:text-[12px] md:p-4 text-gray-3">Copyright© 2026 ภูณัฐกิจซัพพลายส์ จำกัด</div>
        </footer>
    )

};
