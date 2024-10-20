<script lang="ts">
    import * as config from "$lib/project.config";
    import { page } from "$app/stores";
    import type { Metadata } from "../../app.js";
    let { data } = $props();
    const blogPosts = data.blogPosts as Metadata[];
</script>

<svelte:head>
    <title>{config.title}</title>
</svelte:head>

<h1>Blog Posts</h1>

<ul class="blog-posts">
    {#each blogPosts as blogPost}
        <li class="blog-post">
            <a href="{$page.url}/{blogPost.slug}" title={blogPost.title}
                >{blogPost.title}</a
            >
        </li>
    {/each}
</ul>

<style lang="scss">
    .blog-posts {
        width: 100%;
    }
</style>
