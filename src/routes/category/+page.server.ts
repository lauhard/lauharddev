import type { PageServerLoad } from "../blog/$types";

export const load: PageServerLoad = async ({ fetch }) => {
    const res = await fetch(`api/category`);
    const categories = await res.json();
    console.log("categories", categories);
    return {
        categories
    }

}