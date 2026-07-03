import type { Metadata } from "next"

type SEOProps = {
    title: string
    description: string
    keywords?: string[]
    image?: string
    url?: string
}

export function generateSEO({
    title,
    description,
    keywords = [],
    image = "/image/logo.jpg",
    url = "",
}: SEOProps): Metadata {
    const siteName = "ภูณัฐกิจ ซัพพลายส์ จำกัด"
    const baseUrl = process.env.NEXT_PUBLIC_URL_HOST_CLIENT
    return {
        title,
        description,
        keywords,

        openGraph: {
            title,
            description,
            url: `${baseUrl}${url}`,
            siteName,
            images: [
                {
                    url: image,
                    width: 1200,
                    height: 630,
                },
            ],
            locale: "th_TH",
            type: "website",
        },

        twitter: {
            card: "summary_large_image",
            title,
            description,
            images: [image],
        },

        alternates: {
            canonical: `${baseUrl}${url}`,
        },

        robots: {
            index: true,
            follow: true,
        },
    }
}
