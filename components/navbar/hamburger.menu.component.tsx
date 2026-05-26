type onClick = () => void
type prop = {
    onClick?: onClick
}
export default function HamburgerMenu({ onClick }: prop) {
    return (
        <label className="lg:hidden z-40 *:w-12.5 *:h-2 *:duration-700 *:bg-amber-600 flex flex-col gap-1 *:rounded-lg active:scale-90 duration-300 " htmlFor="hamburger" onClick={onClick}>
            <div className=""></div>
            <div className=""></div>
            <div className=""></div>
        </label>
    )
};
