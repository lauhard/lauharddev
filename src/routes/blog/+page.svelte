<script lang="ts">
    import * as config from "$lib/project.config";
    import { page } from "$app/stores";
    import type { Metadata } from "../../app.js";
    import MySearch from "$lib/components/MySearch.svelte";
    let { data } = $props();
    const blogPosts = data.blogPosts as Metadata[];
    let results: Metadata[] = $state(blogPosts);
    let searchTerm = $state("");

    $effect(() => {
        if (results.length === 0 && searchTerm.length == 0) {
            results = blogPosts;
        }
    });
</script>

<svelte:head>
    <title>{config.title}</title>
</svelte:head>

<h2>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="lucide lucide-book-open"
        ><path d="M12 7v14" /><path
            d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"
        /></svg
    ><span>Blog Posts</span>
</h2>

<MySearch bind:results bind:searchTerm></MySearch>

<ul class="blog-posts">
    {#each results as blogPost}
        <li class="blog-post">
            <a href="{$page.url}/{blogPost.slug}" title={blogPost.title}>
                {blogPost.title}
            </a>
            <div class="categories">
                {#each blogPost.categories as item}
                    <span class="category">{item}</span>
                {/each}
            </div>
        </li>
    {/each}
</ul>

<style lang="scss">
    .blog-posts {
        width: 100%;
        .blog-post {
            margin: 0;
            padding: 0;
            a {
                margin: 0;
                padding: 0;
            }
            margin-bottom: 2rem;
            .categories {
                margin: 0;
                padding: 0;
                margin-top: 0.5rem;
                .category {
                    margin: 0;
                    padding: 0;
                    background-color: var(--brand);
                    padding: 0.25rem 0.6rem;
                    border-radius: 0.7rem;
                    margin-right: 0.3rem;
                    font-weight: bold;
                    font-size: 0.65rem;
                    color: var(--text-2-light);
                }
            }
        }
    }
    span {
        text-transform: capitalize;
        display: inline-block;
        margin-left: 0.5rem;
    }
    .lucide-book-open {
        margin-bottom: 5px;
        height: 1.5rem;
        stroke-width: 2px;
    }
</style>
