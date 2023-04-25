<script lang="ts">
	import Logo from '$lib/components/Logo.svelte';
	import { page } from "$app/stores";
    import Navigation from './Navigation.svelte';
</script>

<header>
	<Navigation></Navigation>
</header>

<style lang="scss">
	header {
		display: flex;
		justify-content: space-between;
		height: auto;
		width: 100%;
        z-index: 100;
	}
</style>
