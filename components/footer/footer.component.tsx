import BackLink from "./back.link.component";
import QrContact from "./qr.contact.component";

export default async function Footer() {
    return (
        <footer className=" bg-gray-6 w-full flex justify-center items-center flex-col overflow-visible">
            <nav className=" p-16 lg:p-16 lg:pb-4   text-white lg:max-w-7xl w-full flex flex-row gap-8  lg:gap-4 justify-between  items-start  md:justify-between lg:justify-around lg:items-start flex-wrap">
                <QrContact />
                <BackLink pathname="/products" field="category" />
                <BackLink pathname="/products" field="type" />
                <BackLink pathname="/products" field="brand" />
            </nav>
            <div className=" text-nowrap text-[10px] pb-4 text-orange ">Copyright© 2026 ภูณัฐกิจซัพพลายส์ จำกัด</div>
        </footer>
    )

};
