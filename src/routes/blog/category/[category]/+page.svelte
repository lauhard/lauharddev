<script lang="ts">
    import { page } from "$app/stores";

    let { data } = $props();
    let postsByCategory = data.postsByCategory;
</script>

<h2>Blog Posts by Category <span>{$page.params.category}</span></h2>

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
    span {
        color: var(--primary);
        text-decoration: underline;
        text-transform: capitalize;
        display: inline-block;
        margin-left: var(--size-2);
    }
</style>
