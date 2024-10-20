import { getCategories } from "$lib";
import { json } from '@sveltejs/kit'

export const GET = async () => {
    const categories = await getCategories();
    return json(categories);
}