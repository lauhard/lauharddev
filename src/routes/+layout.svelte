<script lang="ts">
    import "@picocss/pico";
    import '../app.css';
    import Navigation from "$lib/components/Navigation.svelte";
    import ThemeSwitcher from "$lib/components/ThemeSwitcher.svelte";
    import { setTheme } from "$lib/stores/themeStore.svelte";
    import Aside from "$lib/components/Aside.svelte";
    import { LucideArrowUp } from "lucide-svelte";
    let { children, data } = $props();
    setTheme(data.theme);
    let show= $state(false);
    let scroll = $state(0);
</script>

<svelte:window bind:scrollY={scroll} />

<div class="app ">
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

<button class="btn-up" class:show={scroll > 40} disabled={scroll < 40} onclick={()=>{
    scroll = 0;
}}><LucideArrowUp size="1.5rem"></LucideArrowUp></button>

<style lang="scss">
    .app {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
        height: 100%;
        width: 100%;
        background-image: var(--surface-gradient);
        main {
            display: flex;
            flex-direction: column;
            height: inherit;
            width: inherit;
            max-width: var(--content-width);
            align-self: center;
            margin:var(--top);
            padding:var(--side);
        }
    }
    .brand {
        margin: 0;
        padding: 0;
        margin-left: 1rem;
        a {
            margin: 0;
            padding: 0;
            font-size: .82rem; //14.5
            font-size: 1rem; //14.5
            text-transform: uppercase;
            letter-spacing: 0px;
            color: var(--primary);
            font-weight: bolder;
            text-decoration: none;
            &:hover {
                color:var(--accent);
            }
        }
    }
    .btn-up {
        bottom: -30px;
        right: 1.5rem;
        transition: all 0.3s ease-in-out;
        z-index: 99;
        position: fixed;
        color:var(--surface-1);
        border:var(--accent);
        background-color: var(--accent);
    }
/* If data-theme="dark" is directly on .btn-up */
    .show {
        bottom: 1.5rem !important;
        transition: all 0.3s ease-in-out;
        border-radius: 50%;
    }

    @media (max-width: 575.98px) {
        :root{
            --word-spacing: 1px;
        }
        main{
            //background-color: orange;
            --top:1rem 0 0 0;
            --side: 0 1.5rem;
        }
    }

    // Small devices (landscape phones, less than 768px)
    @media (min-width: 575.98px) and (max-width: 767.98px) {
        main {
            --base-font-size:6px !important;
            --top:1rem 0 0 0;
        }
    }

    // Medium devices (tablets, less than 992px)
    @media (min-width: 767.98px) and (max-width: 991.98px) {

     }

    // Large devices (desktops, less than 1200px)
    @media (max-width: 1199.98px) {

    }
</style>