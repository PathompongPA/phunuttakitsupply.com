import type { Metadata } from "next"

type SEOProps = {
    title: string
    description: string
    keywords?: string[]
    image?: string
    url?: string
}

function toAbsoluteUrl(path: string, baseUrl: string) {
    if (!path) return baseUrl
    if (path.startsWith("http://") || path.startsWith("https://")) return path
    return `${baseUrl}${path.startsWith("/") ? path : `/${path}`}`
}

export function generateSEO({
    title,
    description,
    keywords = [],
    image = "/image/logo.jpg",
    url = "",
}: SEOProps): Metadata {
    const siteName = "ภูณัฐกิจ ซัพพลายส์ จำกัด"
    const baseUrl = process.env.NEXT_PUBLIC_URL_HOST_CLIENT || ""

    const fullUrl = url
    const fullImage = toAbsoluteUrl(image, baseUrl)

    return {
        title,
        description,
        keywords,

        openGraph: {
            title,
            description,
            url: fullUrl,
            siteName,
            images: [
                {
                    url: fullImage,
                    width: 1200,
                    height: 630,
                    alt: title,
                },
            ],
            locale: "th_TH",
            type: "website",
        },

        twitter: {
            card: "summary_large_image",
            title,
            description,
            images: [fullImage],
        },

        alternates: {
            canonical: fullUrl,
        },

        robots: {
            index: true,
            follow: true,
        },
    }
}
