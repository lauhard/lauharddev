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
        font-size: 14.5px;
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
        }
    }
</style>