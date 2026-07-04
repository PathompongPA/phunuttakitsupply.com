// app/sitemap.ts
import type { MetadataRoute } from "next";

const BASE_URL = "https://phunattakitsupply.com";

async function getBlogs() {
    const res = await fetch(`${BASE_URL}/api/items/blog`, {
        cache: "no-store",
    });
    if (!res.ok) return [];
    return res.json();
}

async function getProducts() {
    const res = await fetch(`${BASE_URL}/api/items/product`, {
        cache: "no-store",
    });
    if (!res.ok) return [];
    return res.json();
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const products = await getProducts();
    const blogs = await getBlogs();

    return [
        {
            url: BASE_URL,
            lastModified: new Date(),
            changeFrequency: "month",
            priority: 1,
        },
        {
            url: `${BASE_URL}/about`,
            lastModified: new Date(),
            changeFrequency: "year",
            priority: 0.6,
        },
        {
            url: `${BASE_URL}/blogs`,
            lastModified: new Date(),
            changeFrequency: "daily",
            priority: 0.8,
        },
        {
            url: `${BASE_URL}/catalogs`,
            lastModified: new Date(),
            changeFrequency: "daily",
            priority: 0.4,
        },
        ...blogs.data.map((item: { id: string; updatedAt?: string }) => ({
            url: `${BASE_URL}/blogs/${encodeURIComponent(item.id)}`,
            lastModified: item.updatedAt ? new Date(item.updatedAt) : new Date(),
            priority: 1,
        })),
        ...products.data.map((item: { name: string; updatedAt?: string }) => ({
            url: `${BASE_URL}/products/${encodeURIComponent(item.name)}`,
            lastModified: item.updatedAt ? new Date(item.updatedAt) : new Date(),
            priority: 1,
        })),
    ];
}