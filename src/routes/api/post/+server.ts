import { fetchBlogPosts } from '$lib';
import { json } from '@sveltejs/kit'

export const GET = async () => {
    const blogPosts = await fetchBlogPosts();
    return json(blogPosts)
}
