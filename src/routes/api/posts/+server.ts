import { fetchPosts } from '$lib/utils/main';
import { json } from "@sveltejs/kit";

export const GET = async() => {
    const posts = await fetchPosts();
    console.log("[+server.ts] API\\POSTS\\GET - fetchPosts: ", posts);
    return json(posts)
}