<script lang="ts">
    import * as config from "$lib/project.config";
    import Route from "./Route.svelte";
    import routes from "$lib/routes";
    import { page } from "$app/stores";
    import type { Snippet } from "svelte";
    let { children = null, brand = null, style = "", theme = "", ...props } = $props();
    let isActive = (routePath: string) => {
        if (
            $page.url.pathname == routePath ||
            ($page.url.pathname.includes(routePath.toLocaleLowerCase()) && routePath.toLocaleLowerCase() != "/")
        ) {
            return true;
        }
    };
</script>

<nav>

    <ul class="brand">
        {@render  (brand as Snippet)()}
    </ul>
    <ul>
        {#each routes as route}
            <li class:active={isActive(route.path)}>
                <Route {route} CLASS={isActive(route.path) ? "active-link": ""  }>
                    {route.name}
                </Route>
            </li>
            <!-- content here -->
        {/each}
        <li class="theme-switcher">
            {@render (children as Snippet)()}
        </li>
    </ul>

</nav>

<style lang="scss">
    nav {
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        padding-right: var(--size-3);
        li:not(.theme-switcher){
            padding-inline: 1rem;
            font-weight: var(--font-weight-8);
        }
    }

</style>
