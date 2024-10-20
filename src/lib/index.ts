// place files you want to import through the `$lib` alias in this folder.
//disable ssr
import { error } from '@sveltejs/kit';
import type { Metadata } from '../app';

// use vite glob to fetch all md files
export const fetchBlogPosts = async () => {
    const blogPosts = [];
    const globs = import.meta.glob("/src/lib/posts/*/*.md", { eager: true });
    for (const path in globs) {
        //pop removes the last element of the array and returns it
        //then we replace the .md with an empty string
        const slug = path.split('/')?.pop()?.replace('.md', '');
        const file = globs[path]
        if (file && typeof file === 'object' && 'metadata' in file && slug) {
            const metadata = (file as { metadata: Metadata }).metadata
            console.log("fetchBlogPosts", metadata);
            const post = { ...metadata, slug }
            blogPosts.push(post)
        }
    }
    return blogPosts;
}

// get categories distinct
export const fetchCategories = async () => {
    const blogPosts = await fetchBlogPosts();
    const categories = blogPosts.map(post => post.categories);
    return [...new Set(...categories)];
}

export const getPostBySlug = async (slug: string) => {
    try {
        const post = await import(`/src/lib/posts/${slug}/${slug}.md`);
        return {
            post: post.default,
            metadata: post.metadata
        }
    } catch (e) {
        console.error("Post not found", { message: "Check the folder/ markdown file name - " + (e as Error)?.message });
        throw new Error("Post not found - Check the folder/markdown file name - " + (e as Error)?.message);
        throw error(404, { message: (e as Error)?.message } as App.Error);
    }
}

export const getPostsBySlugWildcard = async (slug: string) => {
    const globs = import.meta.glob("/src/lib/posts/*/*.md", { eager: true });
    for (const path in globs) {
        if (path.includes(slug)) {
            console.log("getPostBySlug", path, slug);
            const post = await await import(path);
            console.log("getPostBySlug", post);
            return {
                post: post.default,
                metadata: post.metadata
            }
        }
    }
    throw new Error("Post not found");
}

// navigator needs a secure context and https to work
export const copy2ClipBoard = async (element: HTMLElement) => {
    if (element) {
        if (element?.tagName === "I" && element?.parentElement) {
            element = element.parentElement;
        }
        if (element.tagName === "BUTTON" && element?.parentElement) {
            element = element.parentElement;
        }
        const code = element?.nextElementSibling?.children[0].textContent?.toString() ?? "";
        console.info("[clipboard]: copying to clipboard\n", code);
        if (code && navigator.clipboard)
            navigator.clipboard.writeText(code);
    } else {
        console.info("[clipboard]: tag not found ", "");
    }
};

/**
 * Searches for all code blocks in the document and makes the copy2clipboard button work
 */
export const addCodeBlockExtension = async () => {
    const copyButtons = document.querySelectorAll(".copy-button");
    for (let i = 0; i < copyButtons.length; i++) {
        //get the current code block
        const copyButton = copyButtons[i] as HTMLElement;
        copyButton.addEventListener("click", async () => {
            await copy2ClipBoard(copyButton);
        });
    }
};
