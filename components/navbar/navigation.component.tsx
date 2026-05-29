'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import SearchKeyword from '../search/search.keyword.component'

export default function NavigationBar() {
    const pathname = usePathname()

    const segments = pathname.split('/').filter(Boolean)

    const buildHref = (index: number) => {
        return '/' + segments.slice(0, index + 1).join('/')
    }

    return (
        <nav className="flex gap-2 text-[16px] text-white bg-orange p-4 items-center justify-between sticky top-24 z-40">
            <div className=" flex gap-2">
                <Link className=" font-semibold underline" href="/">หน้าหลัก</Link>
                {segments.map((segment, index) => {
                    const href = buildHref(index)
                    const isLast = index === segments.length - 1
                    return (
                        <div key={href} className="flex gap-2 text-white">
                            <span>/</span>
                            {isLast ? (
                                <span className="">{decodeURIComponent(segment)}</span>
                            ) : (
                                <Link href={href} className=" font-semibold underline">
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
