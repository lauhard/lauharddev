<script lang="ts">
    import type { Route } from "../../app";
    import routes from "$lib/routes";
    import { page } from "$app/stores";
    import type { Snippet } from "svelte";
    import { Menu } from "lucide-svelte";

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

<nav class="navigation">
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
            <li class="aside-button-wrapper">
                <button
                    class="aside-button"
                    onclick={()=>show=!show}
                    onkeydown={()=>show=!show}
                    type="button"
                    aria-label="toggle menu"
                    aria-live="polite"
                    title="Toggle Menu"
                >
                    <svg xmlns="http://www.w3.org/2000/svg"

                        viewBox="0 0 24 24"
                        fill="none" stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="lucide lucide-menu">
                        <line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
                </button>
            </li>

        {/if}
    </ul>
</nav>


{#snippet themeSwticher()}
    {#if children}
        <li >
            {@render (children as Snippet)()}
        </li>
    {/if}
{/snippet}


<style lang="scss">
    nav {
        //box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
        height: 2.5rem;
        background: linear-gradient(125deg, var(--surface-3) 8.4rem, var(--surface-1) 0%);
        border-top:.3rem solid var(--surface-3);
        box-sizing: border-box;
        ul{
            margin: 0;
            padding: 0;
            display: flex;
            justify-content: center;
            align-items: center;

        }
        li {

            margin:0;
            padding:0;
            display: flex;
            text-transform: uppercase;
            justify-content: center;
            align-items: center;
            font-weight: bold;
            height: 100%;
            font-size: 14px;
            font-size: .77rem; //14px;
            text-align: center;
            margin-right: 1rem;
            text-align: center;
            height: 100%;
            a{
                text-decoration: none;
                text-align: center;
            }
        }
        .aside-button{
            background: inherit;
            border:none;
            margin: 0;
            padding: 0;
            box-shadow: none;
            .lucide-menu{
                margin-bottom: .25rem;
                height: 1.25rem;
                stroke-width: 2.5px;
            }
        }
    }
</style>
