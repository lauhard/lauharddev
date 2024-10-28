
<script lang="ts">
    import { page } from "$app/stores";
    import routes from "$lib/routes";
    import type { Route } from "../../app";
    import { X } from "lucide-svelte";
    let { show = $bindable() } = $props();

    let isActive = (routePath: string) => {
        if (
            $page.url.pathname == routePath ||
            ($page.url.pathname.includes(routePath.toLocaleLowerCase()) && routePath.toLocaleLowerCase() != "/")
        ) {
            return true;
        }
    };
    const translateX = -50;
    const close = () => {
        open=false; // fade out the links
        setTimeout(() => {
            show = false;
        }, 300); // close the aside
    };

    let open =$state(false);
    $effect(()=>{
        if(show){
            setTimeout(() => {
                open= show as boolean
            }, 0); //fix: first open the aside, then show the links
        }
    })
</script>

<!-- svelte-ignore slot_element_deprecated -->
<aside class:show class:open={open} >
    <ul class="controls" >

        <li>
            <button
                onmouseup={close}
                class="close"
                type="button"
                title="Close Aside"
                aria-live="polite"
                aria-label="button close"
            >
                <X></X>
            </button>
        </li>
    </ul>
    <slot name="routes">
        <ul class="routes-aside">
            {#each routes as route, i}
                <li class:active={isActive(route.path)}
                 style:transform="translateX({translateX - i * 50}%)"
                >
                <a
                    class="route-aside"
                    href={(route as Route).path}
                    onmouseup={close}
                >
                {route.name}
                </a>
            </li>
            {/each}
        </ul>
    </slot>
</aside>

<style lang="scss">
    aside {
        --animation-time: 400ms;
        position: fixed;
        top: 0;
        margin: 0;
        padding: 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        width: 0%;
        height: 100vh;
        background: var(--surface-1);
        left: -100%;
        z-index: 100;
        transition: all 400ms ease-in-out;
        opacity: .9;
        .routes-aside {
            padding: 0;
            margin: 0;
            display: flex;
            flex-direction: column;
            height: 100%;
            width: 100%;
            list-style: none;
            margin-top: 4rem;
            li {
                margin: 0;
                padding: 0;
                max-inline-size: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
                text-align: center;
                width: 100%;
                height: 4rem;
                .route-aside {
                    width: 100%;
                    height: 100%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    font-size: var(--font-size-3);
                    font-weight: var(--font-weight-6);
                    transition: all var(--animation-time) ease-in-out;
                }
            }
        }
        .controls{
            display: flex;
            flex-direction: row-reverse;
            width: 100%;
            margin:0;
            padding: 0;
            .close {
                margin: 0;
                padding: 0;
                display: flex;
                background-color: inherit;
                border:none;
                box-shadow: none;
                margin-top: .8rem;
                margin-right: .5rem;
            }
        }
    }
    .open {
        width:100%;
        left:0%;
        .routes-aside {
            li {
                position: relative;
                opacity: 0;
                animation: slideIn 500ms forwards;
                animation-delay: 500ms;
            }
        }
        transition:all 400ms ease-out !important;
    }

    @keyframes slideIn {
        from {
            opacity: 0;
            background: var(--primary);
        }
        to {
            transform: translateX(0);
            opacity: 1;
            background: var(--surface-1);
            margin-block: 0.1rem;
        }
    }
</style>