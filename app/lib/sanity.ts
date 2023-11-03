import { createClient } from "next-sanity";

const projectId = "gfgaxjqx";
const dataset = "production";
const apiVersion = "2023-01-01";

export const client = createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn: true,
    token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
})