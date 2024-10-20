<script lang="ts">
    let { data } = $props();
    let categories = data.categories;
</script>

<h1>Categories</h1>
<ul class="categories">
    {#each categories as category}
        <li class="category">
            <a href={`category/${category}`} title={category}>{category}</a>
        </li>
    {/each}
</ul>
