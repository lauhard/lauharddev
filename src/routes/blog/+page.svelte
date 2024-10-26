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
    <span>Blog Posts</span>
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
            margin-top: 1.5rem;
            padding-bottom: 0.75rem;
            border-bottom: dashed 1px var(--accent);
            .categories {
                margin: 0;
                padding: 0;
                margin-top: 0.5rem;
                display: flex;
                justify-content: flex-start;
                .category {
                    margin: 0;
                    padding: 0;
                    background-color: var(--brand);
                    padding: 0rem 0.6rem;
                    border-radius: 0.7rem;
                    margin-right: 0.3rem;
                    font-weight: bold;
                    font-size: 0.6rem;
                    line-height: 0.6rem;
                    text-align: center;
                    display: inline-flex;
                    align-items: center;
                    height: 1.3rem;
                    color: var(--text-2-light);
                }
            }
        }
    }
    span {
        text-transform: uppercase;
        display: inline-block;
        font-size: 1.2rem;
        font-weight: bolder;
        letter-spacing: 0;
        color: var(--accent);
    }
</style>
