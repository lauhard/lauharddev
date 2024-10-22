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


<h2>{metadata.title}</h2>

{#if metadata.excerpt}
    <p class="excerpt">{metadata.excerpt}</p>
{/if}

<div class="metadata">
    <p><span class="descr">Published: </span> <span class="value">{metadata.created}</span></p>
    {#if metadata?.updated}
        <p><span class="descr">Updated: </span> <span class="value">{metadata?.updated}</span></p>
    {/if}
    {#if metadata.readingTime}
        <p><span class="descr">Reading: </span> <span class="value">{metadata.readingTime.text}</span></p>
    {/if}
    {#if metadata.author}
        <p><span class="descr">Author: </span> <span class="value">{metadata.author}</span></p>
    {/if}
</div>


{#if categories}
    <div class="categories">
            <p><span class="descr">Categories:</span>
            {#each categories as category}
                <a class="category" href={`category/${category}`} title={category}>{category}</a>
            {/each}
        </p>
    </div>
{/if}

<div class="blog-post">
    {@render data.post()}
</div>

<style lang="scss">
    .metadata, .excerpt{
        p {
            margin: 0;
        }
    }
    .excerpt{
        margin-bottom: 1rem;
    }
    .descr{
        font-weight: var(--font-weight-8);
        width: 100px;
        display: inline-block;
        text-transform: uppercase;
        font-size: var(--font-size-0);

    }
    .metadata{
        .value{
            font-size: 0.9rem;
            font-size: .89rem; //16px
        }
    }
    .categories {
        margin-bottom: 1rem;
        .category{
            margin-right: 0.5rem;
            font-size: .89rem;
            text-transform: capitalize;
            &::after{
                content: ',';
            }
            &:last-child{
                &::after{
                    content: '';
                }
            }
            /*&::before{
                content: '#';
            }*/
        }
    }
</style>