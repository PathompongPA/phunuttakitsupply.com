'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function NavigationBar() {
    const pathname = usePathname()

    const segments = pathname.split('/').filter(Boolean)

    const buildHref = (index: number) => {
        return '/' + segments.slice(0, index + 1).join('/')
    }

    return (
        <nav className="flex gap-2 text-[16px] lg:text-[12px] w-full text-white bg-orange p-2 items-center justify-center lg:px-16 z-30">
            <div className=" flex gap-2 lg:max-w-7xl w-full lg:px-16 overflow-hidden">
                <Link className=" font-semibold underline text-nowrap" href="/">หน้าหลัก</Link>
                {segments.map((segment, index) => {
                    const href = buildHref(index)
                    const isLast = index === segments.length - 1
                    return (
                        <div key={href} className="flex gap-2 text-white ">
                            <span>/</span>
                            {isLast ? (
                                <span className=" truncate text-nowrap ">{decodeURIComponent(segment)}</span>
                            ) : (
                                <Link href={href} className=" font-semibold underline text-nowrap">
                                    {decodeURIComponent(segment)}
                                </Link>
                            )}
                        </div>
                    )
                })}
            </div>
            {/* <SearchKeyword /> */}
        </nav>
    )

};
