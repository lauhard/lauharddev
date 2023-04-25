<script lang="ts">
	import { theme } from '$lib/stores/themeStore';
	import type { LayoutData } from "./$types";
	import Header from '$lib/components/Header.svelte';
	import './styles.css';
	import "../app.css";
	import { fade, fly } from 'svelte/transition'
    import { onMount } from 'svelte';
	export let data: LayoutData
	$:loaded = false;

	onMount(()=>{
		loaded = true;
	})

</script>

<div class="app"
	class:dark={$theme==='dark'}
	class:light={$theme==='light'}
>
{#if loaded}
	<Header></Header>
	{#key data.currentRoute}
		<main class="main"
			in:fade={{ duration: 150, delay: 150 }} 
			out:fade={{ duration: 150 }}
		>
			<slot />
		</main>
	{/key}

	<footer>
	</footer>
	{:else}
	loaded...
{/if}
</div>

<style lang="scss">
	.light {
		--main-background-color: var(--main-background-color-light) !important;
		--second-background-color:var(--second-background-color-light) !important;
		--main-color: var(--main-color-dark) !important;
	}
	.dark {
		--main-background-color: var(--main-background-color-dark) !important;
		--second-background-color:var(--second-background-color-dark) !important;
		--main-color: var(--main-color-light) !important;
	}
	.app {
		display: flex;
		flex-direction: column;
		scroll-behavior: smooth;
		box-sizing: border-box;
		.main {
			display: flex;
			flex-direction: column;
			position: relative;
		}
		footer {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			padding: 12px;
		}
		footer a {
			font-weight: bold;
		}
	}
	@media (max-width: 640px) {
		main {
			padding: 5px;
		}
		footer {
			padding: 12px 0;
		}
	}
</style>
