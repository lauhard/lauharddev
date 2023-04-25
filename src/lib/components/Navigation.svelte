<script lang="ts">
	import BackButton from '$lib/components/ui/BackButton.svelte';
	import ThemeToggler from '$lib/components/ui/ThemeToggler.svelte';
    import Route from "$lib/components/Route.svelte";
    import routes from '$lib/routes.js'
	import { page } from "$app/stores";
    import Logo from './Logo.svelte';
    import BurgerButton from './ui/BurgerButton.svelte';
	$: aside = false;
</script>
	<nav class="navigation">
		<ul>
            <li>
                <BurgerButton on:click={()=>aside = !aside}></BurgerButton>
            </li>
			<li>
				{#if $page.url.pathname != "/"}
					<BackButton on:click={() => window.history.go(-1)}></BackButton>
				{/if}
			</li>
            {#if routes }
                {#each routes as route}
                <li
                    class:active={$page.url.pathname == route.pathname }
                    aria-current={$page.url.pathname === route.pathname ? "page" : undefined}
                >
				    <Route class="route" pathname={route.pathname}>{route.name}</Route>
			    </li>
                {/each}
            {/if}
            <li>
	            <ThemeToggler></ThemeToggler>
            </li>
            
		</ul>
            {#if $page.url.pathname != "/"}
                <Logo --font-size="1.4rem"></Logo>
            {/if}
	</nav>



<style lang="scss">
    .navigation {
        position: fixed;
        display: flex;
        justify-content: space-between;
        width: 100%;
        background-color: var(--second-background-color);
        // box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.15);
        ul {
            position: relative;
            padding: 0;
            margin: 0;
            height: 3rem;
            display: flex;
            justify-content: center;
            align-items: center;
            list-style: none;
            background-size: contain;
            transition: color 0.3s linear;
            background-color: var(--second-background-color);
            li {
                position: relative;
                height: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
                :global(a), a {
                    display: flex;
                    height: 100%;
                    align-items: center;
                    padding: 0 0.5rem;
                    color: var(--color-text);
                    font-size: 0.9rem;
                    text-transform: uppercase;
                    letter-spacing: 0.1em;
                    text-decoration: none;
                    transition: all 0.3s linear;
                    font-weight: 700;
                    
                }
                a:hover {
                    color: var(--main-accent-color);
                    // text-shadow:0px 0px 30px var(--main-accent-color), 0px 0px 2px var(--main-accent-color);
                }
            }
        }
    }
	.active {
		color: var(--main-accent-color);
	}
	@media (max-width: 600px) {
		
	}
</style>
