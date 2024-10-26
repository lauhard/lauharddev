import { getBlogPosts } from '$lib'
import { json } from '@sveltejs/kit'
export const GET = async () => {
    const blogPosts = await getBlogPosts();
    console.log("fetchBlogPosts", json(blogPosts));
    return json(blogPosts)
}
