<script lang="ts">
    import "@picocss/pico";
    import '../app.css';
    import Navigation from "$lib/components/Navigation.svelte";
    import ThemeSwitcher from "$lib/components/ThemeSwitcher.svelte";
    import { setTheme } from "$lib/stores/themeStore.svelte";
    import Aside from "$lib/components/Aside.svelte";
    let { children, data } = $props();
    setTheme(data.theme);
    let innerWidth = $state(0);
    let show= $state(false);
</script>

<svelte:window bind:innerWidth={innerWidth} />

<div class="app">
        {#if show}
            <Aside bind:show={show}></Aside>
        {/if}
        <Navigation bind:show={show}>
            <ThemeSwitcher></ThemeSwitcher>
            {#snippet brand()}
                <li class="brand">
                    <a href="/">lauhard.dev</a>
                </li>
            {/snippet}
        </Navigation>
    <main>
        {@render children()}
    </main>
</div>

<style lang="scss">
    .brand a {
        font-size: .82rem; //14.5
        margin-left: var(--size-1);
        font-weight: bold;
        text-decoration: none;
        text-transform: uppercase;
        &:hover {
            color:var(--accent);
        }
    }
    .app {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
        height: 100%;
        width: 100%;
        main {
            display: flex;
            flex-direction: column;
            height: inherit;
            width: inherit;
            max-width: var(--content-width);
            align-self: center;
            margin:var(--top);
        }
    }
    @media (max-width: 575.98px) {
        main{
            --side: 0 1rem;
        }
    }

    // Small devices (landscape phones, less than 768px)
    @media (max-width: 767.98px) {
        main {
            --base-font-size:6px !important;
        }
    }

    // Medium devices (tablets, less than 992px)
    @media (max-width: 991.98px) {
        main{
            padding: var(--side);
            --top:1.5rem;
        }
     }

    // Large devices (desktops, less than 1200px)
    @media (max-width: 1199.98px) {
        main {
            margin-top: 2rem;
        }
    }

</style>