<script lang="ts">
    import type { Route } from "../../app";
    import routes from "$lib/routes";
    import { page } from "$app/stores";
    import type { Snippet } from "svelte";
    import { SidebarOpenIcon } from "lucide-svelte";

    let { children = null, brand = null, style = "", theme = "", show = $bindable(), ...props } = $props();
    let innerWidth = $state(0);

    let isActive = (routePath: string) => {
        if (
            $page.url.pathname == routePath ||
            ($page.url.pathname.includes(routePath.toLocaleLowerCase()) && routePath.toLocaleLowerCase() != "/")
        ) {
            return true;
        }
    };
</script>

<svelte:window bind:innerWidth={innerWidth} />

<nav>
    <ul class="brand">
        {@render  (brand as Snippet)()}
    </ul>
    <ul>
        {#if innerWidth > 800}
            {#each routes as route}
                <li class:active={isActive(route.path)}>
                    <a
                        href={(route as Route).path}
                    >
                    {route.name}
                    </a>
                </li>
            {/each}
            {@render themeSwticher()}
        {:else}
            {@render themeSwticher()}
            <button
                class="aside-button"
                onclick={()=>show=!show}
                onkeydown={()=>show=!show}
                type="button"
                aria-label="toggle menu"
                aria-live="polite"
                title="Toggle Menu"
            >
                <SidebarOpenIcon></SidebarOpenIcon>
            </button>
        {/if}
    </ul>
</nav>


{#snippet themeSwticher()}
    {#if children}
        <li class="theme-switcher">
            {@render (children as Snippet)()}
        </li>
    {/if}
{/snippet}


<style lang="scss">
    nav {
        //box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
        padding-right: var(--size-2);
        height: 2.5rem;
        li:not(.theme-switcher li){
            text-transform: uppercase;

            margin:0;
            padding:0;
            height: 100%;
            font-size: 14px;
            font-size: .77rem; //14px;

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
                color:var(--text-1);
                &:hover{
                    color:var(--primary);
                }
            }
        }
        .aside-button{
            background: inherit;
            border:none;
            margin: 0;
            padding: 0;
            box-shadow: none;
            margin-right:1rem;
        }
    }
</style>
