<script lang="ts">
    import * as config from "$lib/project.config";
        import type { Route } from "../../app";
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
                <a
                    href={(route as Route).path}
                >
                {route.name}
                </a>
            </li>
        {/each}
        {#if children}
            <li class="theme-switcher">
                {@render (children as Snippet)()}
            </li>
        {/if}

    </ul>

</nav>

<style lang="scss">
    nav {
        box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
        padding-right: var(--size-2);
        height: 2.5rem;
        li{
            text-transform: uppercase;
            margin:0;
            padding:0;
            height: 100%;
            font-size: 13px;
            margin-right: 1rem;
            font-weight: bold;
            display: flex;
            justify-content: center;
            align-items: center;
            text-align: center;
            height: 100%;

            a{
                text-decoration: none;
                text-align: center;
            }
        }
    }
</style>
