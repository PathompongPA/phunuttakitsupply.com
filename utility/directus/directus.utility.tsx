import { createDirectus, readItems, rest } from "@directus/sdk";

const url: string = process.env.NEXT_PUBLIC_URL_HOST;
const client = createDirectus(url).with(rest())

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function getDate(field_name: string, option: any) {
    return await client.request(readItems(field_name, option))
}
