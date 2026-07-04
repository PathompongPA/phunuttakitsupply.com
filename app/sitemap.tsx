// app/sitemap.ts
import type { MetadataRoute } from "next";

const BASE_URL = "https://phunattakitsupply.com";

async function getData(tableName: string) {
    const res = await fetch(`${BASE_URL}/api/items/${tableName}`, {
        cache: "no-store",
    });
    if (!res.ok) return [];
    return res.json();
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const products = await getData("product");
    const blogs = await getData("blog");
    const brands = await getData("brand");
    const category = await getData("category");
    const typs_product = await getData("type");
    const frequenzy = { alway: "always", hour: "hourly", day: "daily", week: "weekly", month: "monthly", year: "yearly", never: "never" }
    return [
        {
            url: BASE_URL,
            lastModified: new Date(),
            changeFrequency: frequenzy["month"],
            priority: 1,
        },
        {
            url: `${BASE_URL}/about`,
            lastModified: new Date(),
            changeFrequency: frequenzy["year"],
            priority: 0.6,
        },
        {
            url: `${BASE_URL}/products`,
            lastModified: new Date(),
            changeFrequency: frequenzy["day"],
            priority: 1,
        },
        {
            url: `${BASE_URL}/blogs`,
            lastModified: new Date(),
            changeFrequency: frequenzy["day"],
            priority: 0.8,
        },
        {
            url: `${BASE_URL}/catalogs`,
            lastModified: new Date(),
            changeFrequency: frequenzy["month"],
            priority: 0.4,
        },
        ...blogs.data.map((item: { id: string; updatedAt?: string }) => ({
            url: `${BASE_URL}/blogs/${encodeURIComponent(item.id)}`,
            lastModified: item.updatedAt ? new Date(item.updatedAt) : new Date(),
            priority: .9,
        })),
        ...products.data.map((item: { name: string; updatedAt?: string }) => ({
            url: `${BASE_URL}/products/${encodeURIComponent(item.name)}`,
            lastModified: item.updatedAt ? new Date(item.updatedAt) : new Date(),
            priority: 1,
        })),
        ...category.data.map((item: { name: string; updatedAt?: string }) => ({
            url: `${BASE_URL}/products?category=${encodeURIComponent(item.name)}`,
            lastModified: item.updatedAt ? new Date(item.updatedAt) : new Date(),
            priority: .7,
        })),
        ...typs_product.data.map((item: { name: string; updatedAt?: string }) => ({
            url: `${BASE_URL}/products?type=${encodeURIComponent(item.name)}`,
            lastModified: item.updatedAt ? new Date(item.updatedAt) : new Date(),
            priority: .7,
        })),
        ...brands.data.map((item: { name: string; updatedAt?: string }) => ({
            url: `${BASE_URL}/products?brand=${encodeURIComponent(item.name)}`,
            lastModified: item.updatedAt ? new Date(item.updatedAt) : new Date(),
            priority: .7,
        })),
    ];
}