import type { Post } from "$lib/interfaces/post";
import { fetchPost } from "$lib/utils/main";
import { error } from "@sveltejs/kit";
import type { PageLoad } from "./$types";

/**
 * load: load function runs on server and in the browser.
 *  - preloads the data from the server
 *  - runs on the client for hydration
 * PageLoad: generated type PageLoad provides full type safety
 * 
 * blogPost:
 *  - metadata provides all frontmatter properties
 *  - default provides the content/data
 * 
 */

export const load = (async ({ params }) => {
    try {
        const blogPost = await fetchPost(params.slug);
        if (!blogPost) {
            throw error(404, {
                message: `BlogPost ${params.slug}not found...`
            });
        } else {
            const meta: Post = blogPost.metadata;
            const content = blogPost.default;
            const post: Post = {
                content: content,
                title: meta.title,
                published: meta.published,
                updated: meta.updated,
                author: meta.author,
                img: meta.img,
                excerpt: meta.excerpt,
                readingTime: 0,
                categories: meta.categories
            };
            return {
                post
            }
        }

    } catch (ex: any) {
        throw error(404, {
            message: ex.message
        });
    }


}) satisfies PageLoad
