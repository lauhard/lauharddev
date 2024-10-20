export const load = async ({ fetch }) => {
    const res = await fetch(`api/post`);
    const blogPosts = await res.json();
    return {
        blogPosts
    }
}