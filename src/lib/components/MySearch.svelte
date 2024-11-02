<script lang="ts">
    import { createIndex, searchIndex } from "$lib/search";
    import type { Metadata } from "@playwright/test";
    import { onMount } from "svelte";
    let {
        results = $bindable() as Metadata[],
        searchTerm = $bindable("") as string,
    } = $props();
    let search: "loading" | "ready" = $state("loading");

    onMount(async () => {
        const response = await fetch(`/api/search.json`);
        if (!response.ok) {
            search = "loading";
            return false;
        } else {
            results = await response.json();
            if (results.length > 0) {
                createIndex(results);
                search = "ready";
            }
        }
    });

    $effect(() => {
        if (search === "ready" && searchTerm.length > 0 && results.length > 0) {
            results = searchIndex(searchTerm);
        }
    });
</script>

{#if search}
    <!-- content here -->
    <div class="search">
        <input
            type="search"
            bind:value={searchTerm}
            placeholder="Search.."
            aria-label="Search"
            aria-live="polite"
            aria-controls="search-results"
            spellcheck="false"
            autocomplete="off"
        />
    </div>
    {#if results.length > 0 && search === "ready" && searchTerm.length > 0}
        <!--
            <pre>
                {JSON.stringify(results, null, 4)}
            </pre>
        -->
    {/if}
{/if}

<style lang="scss">
</style>
