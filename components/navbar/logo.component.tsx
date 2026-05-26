import Link from "next/link";
// type onClick = () => void
// type prop = {
//     onClick: onClick
// }
export default function Logo() {
    return (
        <label className="" htmlFor="hamburger" >
            <Link href={{ pathname: "/" }}>LOGO</Link>
        </label>
    )

};
