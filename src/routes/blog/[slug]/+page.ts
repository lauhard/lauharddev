import { getPostBySlug } from '$lib';
import { error } from '@sveltejs/kit';
export const load = async ({ params }) => {
    try {
        const slug = params.slug;
        const blogContent = await getPostBySlug(slug)
        return {
            ...blogContent
        }
    } catch (e) {
        error(404, { message: (e as Error)?.message } as App.Error);
    }
}