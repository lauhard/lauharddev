<script lang="ts">
    import type { Snippet } from "svelte";
    import type { Route } from "../../app";
    let { children, class: CLASS="", route, ...props } = $props();
    let render = children as Snippet;
</script>
<a
    href={(route as Route).path}
    class="{(CLASS as string)} route"
    {...props}
>
    {@render render()}
</a>

<style lang="scss">
    .route {
    }
</style>
