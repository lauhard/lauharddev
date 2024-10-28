import { getSearchPosts } from "$lib";
import { json } from "@sveltejs/kit";
export const prerender = true;
export const GET = async () => {
    /**
     * @type {{ title: any; content: string; categories: string, slug: string, excerpt:string, created: string }[]}
     */
    let posts = [];
    const blogPosts = await getSearchPosts();
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
    return json(posts);
}