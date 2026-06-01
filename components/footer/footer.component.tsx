import BackLink from "./back.link.component";
import QrContact from "./qr.contact.component";

export default async function Footer() {
    return (
        <footer className=" bg-gray-6 w-full flex justify-center items-center flex-col">
            <nav className=" p-8 lg:p-16 lg:pb-4   text-white lg:max-w-7xl w-full flex gap-4  lg:gap-16 justify-between   md:justify-between flex-wrap">
                <QrContact />
                <BackLink pathname="/products" field="category" />
                <BackLink pathname="/products" field="type" />
                <BackLink pathname="/products" field="brand" />
                <BackLink pathname="/products" field="category" />
                <BackLink pathname="/products" field="type" />
                <BackLink pathname="/products" field="brand" />
            </nav>
            <div className=" text-nowrap text-[10px] pb-4 text-orange ">Copyright© 2026 ภูณัฐกิจซัพพลายส์ จำกัด</div>
        </footer>
    )

};
