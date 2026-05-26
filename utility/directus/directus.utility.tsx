import { createDirectus, readItems, rest } from "@directus/sdk";

const url = process.env.NEXT_PUBLIC_URL_HOST;

if (!url) {
    throw new Error("NEXT_PUBLIC_URL_HOST is missing");
}

const client = createDirectus(url).with(rest());

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function getData(collection: string, option?: any) {
    return await client.request(
        readItems(collection, option)
    );
}