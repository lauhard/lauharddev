import { getPostsByCategory } from '$lib';
export const load = async ({ params }) => {
    const category = params.category;
    const postsByCategory = await getPostsByCategory(category);
    return {
        postsByCategory
    }
};