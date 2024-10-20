import type { PageServerLoad } from "../$types";

export const load: PageServerLoad = async ({ url, fetch }) => {
    const res = await fetch(`${url.origin}/api/category`);
    const categories = await res.json();
    console.log("categories", categories);
    return {
        categories
    }

}