<script lang="ts">
    let { data } = $props();
    let categories = data.categories;
</script>

<h2>
    <span>Categoies</span>
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
        text-transform: uppercase;
        display: inline-block;
        font-size: 1.2rem;
        font-weight: bolder;
        color: var(--accent);
    }
</style>
