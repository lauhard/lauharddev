
<script lang="ts">
    import { page } from "$app/stores";
    import routes from "$lib/routes";
    import type { Route } from "../../app";
    import { createEventDispatcher } from "svelte";
    import { SidebarCloseIcon } from "lucide-svelte";
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
        setTimeout(() => {
            show = false;
        }, 300); //fix: for routing to work properly
    };
</script>

<!-- svelte-ignore slot_element_deprecated -->
<aside class:show>
    <ul class="controls">
        <li class="brand">
        </li>
        <li>
            <button
                onmousedown={close}
                onkeydown={close}
                ontouchstart={close}
                class="close"
                type="button"
                title="Close Aside"
                aria-live="polite"
                aria-label="button close"
            >
                <SidebarCloseIcon></SidebarCloseIcon>
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
                    onmousedown={close}
                    onkeydown={close}
                    ontouchstart={close}
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
        left: 0;
        margin: 0;
        padding: 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        height: 100vh;
        background-color: var(--surface-1);
        transform: translateX(-100%);
        transition: transform var(--animation-time) ease-in-out;
        z-index: 100;
        .routes-aside {
            padding: 0;
            margin: 0;
            margin-top: var(--size-10);
            display: flex;
            flex-direction: column;
            height: 100%;
            width: 100%;
            list-style: none;
            li {
                margin: 0;
                padding: 0;
                max-inline-size: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
                width: 100%;
                height: 2rem;
            }
        }
        .controls {
            margin: 0;
            padding: 0;
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 100%;
            list-style: none;
            margin-top: .55rem;

            li {
                padding: 0;
                margin: 0;
                height: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
            }
            .close {
                margin: 0;
                padding: 0;
                display: flex;
                justify-content: center;
                align-items: center;
                margin-inline: var(--size-3);
                background-color: inherit;
                border:none;
                box-shadow: none;
            }
            .brand {
                margin-left: -0.3rem;
            }
        }
    }
    .active {
        color: var(--brand);
    }
    .show {
        .controls {
            z-index: 1000;
        }
        .routes-aside {
            li {
                position: relative;
                opacity: 0;
                animation: slideIn 500ms forwards;
                animation-delay: 500ms;
            }
        }
        transform: translateX(0);
    }
    .route-aside {
        font-size: var(--font-size-3);
        width: 100%;
        text-align: center;
        padding-block: var(--size-6);
        font-weight: var(--font-weight-6);
        transition: all var(--animation-time) ease-in-out;
    }
     .route-aside .active {
        color: var(--accent-1);
        font-size: var(--font-size-3);
        transition: all var(--animation-time) ease-in-out;
    }

    @keyframes slideIn {
        from {
            opacity: 0;
            background: var(--accent-1);
        }
        to {
            transform: translateX(0);
            opacity: 1;
            background: var(--surface-1);
            margin-block: 0.1rem;
        }
    }
</style>