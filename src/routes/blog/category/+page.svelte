<script lang="ts">
    let { data } = $props();
    let categories = data.categories;
</script>

<h2>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="lucide lucide-tags"
        ><path d="m15 5 6.3 6.3a2.4 2.4 0 0 1 0 3.4L17 19" /><path
            d="M9.586 5.586A2 2 0 0 0 8.172 5H3a1 1 0 0 0-1 1v5.172a2 2 0 0 0 .586 1.414L8.29 18.29a2.426 2.426 0 0 0 3.42 0l3.58-3.58a2.426 2.426 0 0 0 0-3.42z"
        /><circle cx="6.5" cy="9.5" r=".5" fill="currentColor" /></svg
    ><span>Categoies</span>
</h2>
<ul class="categories">
    {#each categories as category}
        <li class="category">
            <a href={`category/${category}`} title={category}>{category}</a>
        </li>
    {/each}
</ul>

<style lang="scss">
    a {
        text-transform: capitalize;
    }
    span {
        text-transform: capitalize;
        display: inline-block;
        margin-left: 0.5rem;
    }
    .lucide-tags {
        margin-bottom: 5px;
        height: 1.7rem;
        stroke-width: 1.5px;
    }
</style>
