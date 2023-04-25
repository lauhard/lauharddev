<script lang="ts">
	import { theme, THEMES } from '$lib/stores/themeStore';
    function toggleTheme() {
    	theme.update(t => (t === THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT));
	}
</script>
<button class="toggle-button" on:click={toggleTheme}>
    {#if $theme == "dark"}
        <i class="fa-solid fa-sun" />
    {:else}
        <i class="fa-solid fa-moon" />
    {/if}
</button>
<style lang="scss">
    .toggle-button {
		position: relative;
		border: none;
		background-color: var(--main-background-color);
		border-radius: 50%;
		width: 30px;
		height: 30px;
		border: 1px solid var(--main-accent-color);
		box-sizing: border-box;
		i {
			color: var(--main-accent-color);
		}
	}
</style>