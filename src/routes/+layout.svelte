<script lang="ts">
    import "@picocss/pico";
    import '../app.css';
    import Navigation from "$lib/components/Navigation.svelte";
    import ThemeSwitcher from "$lib/components/ThemeSwitcher.svelte";
    import { setTheme } from "$lib/stores/themeStore.svelte";
    import Aside from "$lib/components/Aside.svelte";
    let { children, data } = $props();
    setTheme(data.theme);
    let show= $state(false);
</script>


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

<style lang="scss">
    .app {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
        height: 100%;
        width: 100%;
        /*background-image: linear-gradient(to right bottom, #292727, #2b2929, #2d2b2b, #302e2e, #323030, #45373775, #583f3c5d, #6b474063, #9059424d, #af6d3e44, #c888353b, #d8a9262f);
        background-color: var(--primary);
        background:linear-gradient(100deg, var(--surface-1) 40%, var(--primary) 80%);*/
        background-image: var(--surface-gradient);

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
            margin-bottom: .2rem;
            text-decoration: none;
            //text-decoration: none;
            &:hover {
                color:var(--accent);
            }
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