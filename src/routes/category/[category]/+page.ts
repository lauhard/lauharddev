import type { PostData } from '$lib/interfaces/postdata';
import type { PageLoad } from './$types';

export const load = (async ({fetch, params}) => {
    const { category } = params;
    console.log("[blog/category/[category]/+page.ts]: params", params);
    const response = await fetch('/api/posts');
    const posts = await response.json();
    const filteredPosts = posts.filter( (postData: PostData)=>postData.post?.categories?.includes(category))
    return {
        filteredPosts,
        category
    }
}) satisfies PageLoad