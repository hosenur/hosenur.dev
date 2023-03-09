import { createClient } from "next-sanity";
export const sanityClient = createClient({
    projectId: "6pfgjsqt",
    dataset: "production",
    useCdn: true,
});