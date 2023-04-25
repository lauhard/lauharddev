// import { postStore } from '$lib/stores/poststore';
import type { PageLoad } from './$types';


export const load = (async ({ fetch, params })  => {
    const response = await fetch('api/posts');
    console.log("[/blog/+page.ts] load - params: ", params);
    const posts = await response.json()
    console.log("[/blog/+page.ts] load - posts: ", posts);
    // postStore.set(posts);
    return {
        posts
    }
    
}) satisfies PageLoad