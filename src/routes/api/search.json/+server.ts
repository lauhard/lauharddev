import { getSearchPosts } from "$lib";
import type { Metadata } from "@playwright/test";
import { json } from "@sveltejs/kit";
export const prerender = true;
export const GET = async () => {
    const posts: Metadata[] = [];
    const blogPosts = await getSearchPosts();
    if (blogPosts.length > 0) {
        blogPosts.forEach((post) => {
            posts.push({
                title: post.title,
                content: post.content,
                slug: post.slug,
                categories: post.categories.toString().split(","),
                excerpt: post.excerpt,
                created: post.created,
            });
        });
    }
    return json(posts);
}