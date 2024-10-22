<script lang="ts">
    import { page } from "$app/stores";

    let { data } = $props();
    let postsByCategory = data.postsByCategory;
</script>

<h2>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="lucide lucide-tag"
        ><path
            d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z"
        /><circle cx="7.5" cy="7.5" r=".5" fill="currentColor" /></svg
    ><span>{$page.params.category}</span>
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
    span {
        text-transform: capitalize;
        display: inline-block;
        margin-left: 0.5rem;
    }
    .lucide-tag {
        margin-bottom: 5px;
        height: 1.3rem;
    }
</style>
