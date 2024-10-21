<script lang="ts">
    import { page } from "$app/stores";

    let { data } = $props();
    let postsByCategory = data.postsByCategory;
</script>

<h2><span>{$page.params.category}</span></h2>

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
        text-transform: capitalize;
        display: inline-block;
    }
</style>
