export const load = async ({ fetch }) => {
    const res = await fetch(`api/posts`);
    const blogPosts = await res.json();
    return {
        blogPosts
    }
}