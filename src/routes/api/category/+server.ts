import { fetchCategories } from "$lib";
import { json } from '@sveltejs/kit'

export const GET = async () => {
    const categories = await fetchCategories();
    return json(categories);
}