<script lang="ts">
    import { onMount } from 'svelte';
    import type { Metadata } from '../../../app';
    import { addCodeBlockExtension } from '$lib';
    import Image from '$lib/components/Image.svelte';

    let { data } = $props();
    let metadata: Metadata = data.metadata;
    let categories: Array<string> = metadata.categories;

    onMount(async()=>{
        await addCodeBlockExtension();
    })
</script>

<svelte:head>
    <title>{metadata.title}</title>
    <meta name="title" content="{metadata.title}">
    <meta name="description" content="{metadata.excerpt}">
    <meta name="keywords" content="{metadata.title}">
    <meta property="og:title" content="{metadata.title}">
    <meta property="og:description" content="{metadata.excerpt}">
    <!--<meta property="og:image" content="{image}">-->
</svelte:head>

{#if metadata?.image}
    <Image src={metadata?.image} alt={"blogpost setup"}></Image>
     <!-- content here -->
{/if}


<h1>{metadata.title}</h1>

{#if metadata.excerpt}
    <p>{metadata.excerpt}</p>
{/if}

<div class="metadata">
    <p><span class="descr">Published: </span> <span class="date">{metadata.created}</span></p>
    {#if metadata?.updated}
        <p><span class="descr">Updated: </span> <span class="date">{metadata?.updated}</span></p>
    {/if}
    {#if metadata.readingTime}
        <p><span class="descr">Time: </span> <span class="date">{metadata.readingTime.text}</span></p>
    {/if}
    {#if metadata.author}
        <p><span class="descr">Author: </span> <span class="date">{metadata.author}</span></p>
    {/if}
</div>


{#if categories}
    <div class="categories">
            <p><span class="descr">Categories:</span>
            {#each categories as category}
                <a class="category"href={`category/${category}`} title={category}>{category}</a>
            {/each}
        </p>
    </div>
{/if}

<div class="blog-post">
    {@render data.post()}
</div>

<style lang="scss">

    p{
        margin: 0;
    }
    .descr{
        font-weight: var(--font-weight-8);
        width: 90px;
        display: inline-block;
        text-transform: uppercase;
        font-size: var(--font-size-0);
    }
    .metadata{
        margin-block: 1rem;
        .date{
            font-size: 0.9rem;
        }
    }
    .categories {
        margin-bottom: 2rem;
        .category{
            margin-right: 0.5rem;

            text-transform: lowercase;
            font-size: var(--font-size-1);
            &::after{
                content: ',';
            }
            &:last-child{
                &::after{
                    content: '';
                }
            }

        }
    }

</style>