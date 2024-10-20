<script lang="ts">
    import "@picocss/pico";
    import '../app.css';
    import Navigation from "$lib/components/Navigation.svelte";
    import ThemeSwitcher from "$lib/components/ThemeSwitcher.svelte";
    import { setTheme } from "$lib/stores/themeStore.svelte";
    let { children, data } = $props();
    setTheme(data.theme);

</script>



<div class="app">
    <Navigation >
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
        font-size: var(--font-size-4);
        margin-left: var(--size-2);
        font-weight: bolder;
        &:hover {
            color:var(--accent);
            text-decoration-color: var(--accent);
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
        }
    }
</style>