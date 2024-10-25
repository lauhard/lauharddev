import { getCategories } from "$lib";
import { json } from '@sveltejs/kit'
export const prerender = true;
export const GET = async () => {
    const categories = await getCategories();
    return json(categories);
}