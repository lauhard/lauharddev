<script lang="ts">
    import type { PageData } from "./$types";
    export let data: PageData;
    console.log(data.tags);
</script>

{#each data.tags as tagData}
    <h3>
        <a href="/blog/category/{tagData.tag}">{tagData.tag} - count: {tagData.count}</a>
    </h3>
     <!-- content here -->
{/each}

<style lang="scss">

</style>