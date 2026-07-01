'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import SearchKeyword from '../search/search.keyword.component'
type prop = {
    search?: boolean
}

export default function NavigationBar({ search = false }: prop) {
    const pathname = usePathname()

    const segments = pathname.split('/').filter(Boolean)

    const buildHref = (index: number) => {
        return '/' + segments.slice(0, index + 1).join('/')
    }

    return (
        <nav className="flex gap-2 text-[10px] md:text-[10px] lg:text-[12px] w-full text-white bg-orange px-4 py-4 items-center justify-center lg:px-16 z-30 ">
            <div className="lg:max-w-7xl lg:px-16 flex w-full gap-2 ">
                <div className=" flex gap-1  w-full  overflow-hidden justify-start  items-center ">
                    <Link className=" font-semibold underline text-nowrap" href="/">หน้าหลัก</Link>
                    {segments.map((segment, index) => {
                        const href = buildHref(index)
                        const isLast = index === segments.length - 1
                        return (
                            <div key={href} className="flex gap-1 text-white ">
                                <span>/</span>
                                {isLast ? (
                                    <span className=" truncate text-nowrap ">{decodeURIComponent(segment)}</span>
                                ) : (
                                    <Link href={href} className=" underline text-nowrap">
                                        {decodeURIComponent(segment)}
                                    </Link>
                                )}
                            </div>
                        )
                    })}
                </div>
                {search && < SearchKeyword />}
            </div>
        </nav>
    )

};
