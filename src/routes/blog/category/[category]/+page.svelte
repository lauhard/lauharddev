<script lang="ts">
    import { page } from "$app/stores";

    let { data } = $props();
    let postsByCategory = data.postsByCategory;
</script>

<h2>
    <span class="pre">category:</span><span class="heading"
        >{$page.params.category}</span
    >
</h2>

<ul class="blog-posts">
    {#each postsByCategory as blogPost}
        <li class="blog-post">
            <a
                href="{$page.url.origin}/blog/{blogPost.slug}"
                title={blogPost.title}>{blogPost.title}</a
            >
        </li>
    {/each}
</ul>

<style lang="scss">
    .heading {
        text-transform: uppercase;
        display: inline-block;
        font-size: 1.2rem;
        font-weight: bolder;
        color: var(--accent);
    }
    .pre {
        font-size: 0.9rem;
        text-transform: uppercase;
        font-weight: bolder;
        margin-right: 0.5rem;
    }
</style>
