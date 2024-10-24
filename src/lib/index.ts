// place files you want to import through the `$lib` alias in this folder.
//disable ssr
import type { Metadata } from '../app';

// use vite glob to fetch all md files
export const getBlogPosts = async () => {
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
export const getCategories = async () => {
    const blogPosts = await getBlogPosts();
    const categories: Array<string> = [];
    blogPosts.forEach(post => {
        const _categories = post.categories as Array<string> ?? [];
        _categories.forEach(category => {
            if (!categories.includes(category)) {
                categories.push(category);
            }
        });
    });
    return [...categories];
}

export const getPostBySlug = async (slug: string) => {
    try {
        const post = await import(`../../src/lib/posts/${slug}/${slug}.md`);
        return {
            post: post.default,
            metadata: post.metadata
        }
    } catch (e) {
        console.error("Post not found", { message: "Check the folder/ markdown file name - " + (e as Error)?.message });
        throw new Error("Post not found - Check the folder/markdown file name - " + (e as Error)?.message);
    }
}

export const getPostsByCategory = async (category: string) => {
    const blogPosts = await getBlogPosts();
    const posts = blogPosts.filter(post => post.categories?.includes(category));
    return posts;
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
